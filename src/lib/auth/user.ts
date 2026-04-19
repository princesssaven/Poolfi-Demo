export interface AppUser {
  displayName: string;
  email: string;
  firstName: string;
  image: string | null;
  initials: string;
  lastName: string;
  pseudonym: string;
}

interface UserLike {
  email?: string | null;
  firstName?: string | null;
  image?: string | null;
  lastName?: string | null;
  name?: string | null;
  pseudonym?: string | null;
}

function getNameParts(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);

  return {
    firstName: parts[0] ?? "",
    lastName: parts.slice(1).join(" "),
  };
}

function getInitials(firstName: string, lastName: string, fallback: string) {
  const fromNames = `${firstName.charAt(0)}${lastName.charAt(0)}`.trim();

  if (fromNames) {
    return fromNames.toUpperCase();
  }

  return fallback.slice(0, 2).toUpperCase();
}

export function normalizeAppUser(user: UserLike | null | undefined): AppUser | null {
  if (!user) {
    return null;
  }

  const email = user.email?.trim() ?? "";
  const derivedName = user.name?.trim() ?? "";
  const derivedPseudonym =
    user.pseudonym?.trim() || (email ? email.split("@")[0] : "poolfi-user");
  const explicitFirstName = user.firstName?.trim() ?? "";
  const explicitLastName = user.lastName?.trim() ?? "";
  const nameParts = getNameParts(derivedName);
  const firstName = explicitFirstName || nameParts.firstName || derivedPseudonym;
  const lastName = explicitLastName || nameParts.lastName;
  const displayName =
    [firstName, lastName].filter(Boolean).join(" ") || derivedName || derivedPseudonym;

  return {
    displayName,
    email,
    firstName,
    image: user.image ?? null,
    initials: getInitials(firstName, lastName, displayName || email || "PF"),
    lastName,
    pseudonym: derivedPseudonym,
  };
}
