import { z } from "zod";

import {
  authenticatedProcedure,
  createTRPCRouter,
} from "@/server/api/trpc";
import { Permission } from "@/server/roles-and-permissions";
import { cities } from "@/lib/static/cities";

export const mapsRouter = createTRPCRouter({
  searchMapsApi: authenticatedProcedure(Permission.ENTRY_CREATE)
    .input(z.object({ searchQuery: z.string().min(1), city: z.string().min(1) }))
    .query(async ({ input }) => {

      const city = cities.find((city) => city.city === input.city);

      if (!city) {
        throw new Error("City not found");
      }

      // Query google maps API
      // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=50.9375,6.9603&radius=5000&type=cafe&keyword=Starbucks&key=YOUR_API_KEY
      const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${city.lat},${city.lng}&radius=5000&type=cafe&keyword=${input.searchQuery}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
      // Type the response
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data = await response.json();
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return data;
    
    }),
  createPlaces: authenticatedProcedure(Permission.ENTRY_CREATE)
  .input(z.array(z.object({
    name: z.string().min(1),
    businessStatus: z.string().optional(),
    latitude: z.number(),
    longitude: z.number(),
    viewportNortheastLat: z.number().optional(),
    viewportNortheastLng: z.number().optional(),
    viewportSouthwestLat: z.number().optional(),
    viewportSouthwestLng: z.number().optional(),
    icon: z.string().optional(),
    iconBackgroundColor: z.string().optional(),
    iconMaskBaseUri: z.string().optional(),
    openingHoursOpenNow: z.boolean().optional(),
    photos: z.any().optional(), // You may want to define a more specific schema for photos
    placeId: z.string(),
    plusCodeCompoundCode: z.string().optional(),
    plusCodeGlobalCode: z.string().optional(),
    priceLevel: z.number().optional(),
    rating: z.number().optional(),
    reference: z.string().optional(),
    scope: z.string().optional(),
    types: z.array(z.string()),
    userRatingsTotal: z.number().optional(),
    vicinity: z.string(),
  })))
  .mutation(async ({ctx,  input }) => {
      const places = input.map(place =>{
        return {
          name: place.name,
          businessStatus: place.businessStatus,
          latitude: place.latitude,
          longitude: place.longitude,
          viewportNortheastLat: place.viewportNortheastLat,
          viewportNortheastLng: place.viewportNortheastLng,
          viewportSouthwestLat: place.viewportSouthwestLat,
          viewportSouthwestLng: place.viewportSouthwestLng,
          icon: place.icon,
          iconBackgroundColor: place.iconBackgroundColor,
          iconMaskBaseUri: place.iconMaskBaseUri,
          openingHoursOpenNow: place.openingHoursOpenNow,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          photos: place.photos,
          placeId: place.placeId,
          plusCodeCompoundCode: place.plusCodeCompoundCode,
          plusCodeGlobalCode: place.plusCodeGlobalCode,
          priceLevel: place.priceLevel,
          rating: place.rating,
          reference: place.reference,
          scope: place.scope,
          types: place.types,
          userRatingsTotal: place.userRatingsTotal,
          vicinity: place.vicinity,
        }
      })

      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      return await ctx.db.place.createMany({
        data: places,
        skipDuplicates: true,
      });

  }),
});
