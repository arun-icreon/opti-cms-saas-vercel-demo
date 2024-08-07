import { ApiData, verifyAccess } from "@vercel/flags";
import { unstable_getProviderData as getProviderData } from "@vercel/flags/next";
import { NextResponse, type NextRequest } from "next/server";
import * as flags from "../../../../flags";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const access = await verifyAccess(request.headers.get("Authorization"));

  console.log(access, " access ");

  if (!access) return NextResponse.json(null, { status: 401 });
  console.log(
    "getProviderData(flags) ",
    NextResponse.json<ApiData>(getProviderData(flags))
  );
  return NextResponse.json<ApiData>(getProviderData(flags));
}
