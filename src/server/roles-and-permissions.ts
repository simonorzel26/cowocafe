import { type UserRole } from "@prisma/client";

export { type UserRole };

export enum Permission {
  ENTRY_CREATE,
  ENTRY_UPDATE,
  ENTRY_DELETE,
  ENTRY_REVIEW,
  ENTRY_APPROVE,
  ENTRY_DECLINE,
}

type RoleObject = Record<
  UserRole,
  {
    name: string;
    extends?: UserRole[];
    permissions: Permission[];
  }
>;

export const ROLES: RoleObject = {
  USER: {
    name: "User",
    permissions: [
      Permission.ENTRY_CREATE,
      Permission.ENTRY_UPDATE,
      Permission.ENTRY_DELETE,
    ],
  },
  MODERATOR: {
    name: "Moderator",
    extends: ["USER"],
    permissions: [Permission.ENTRY_APPROVE],
  },
  ADMIN: {
    name: "Admin",
    extends: ["MODERATOR"],
    permissions: [],
  },
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  if (ROLES[role].permissions.includes(permission)) {
    return true;
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const roleExtends = ROLES[role].extends;
  if (roleExtends) {
    return roleExtends.some((r) => hasPermission(r, permission));
  }
  return false;
}
