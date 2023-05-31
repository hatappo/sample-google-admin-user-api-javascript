import { /*GoogleAuth,*/ JWT } from "google-auth-library";
import { admin } from "@googleapis/admin";

const scopes = [
  "https://www.googleapis.com/auth/admin.directory.user.readonly",
];
const keyFile = "keyFile-*****.json"; // FIXME: your service account's key file path.

export const main = async () => {
  // not GoogleAuth, use JWT
  const auth = new JWT({
    subject: "*****@*****.jp", // FIXME: Your delegated user email (may be admin user).
    keyFile: keyFile,
    scopes: scopes,
  });
  const directory = admin({ version: "directory_v1", auth: auth });
  const res = directory.users.get({
    userKey: "*****@*****.jp", // FIXME: email or user id, which you want to get the information.
  });
  console.log((await res).data);
};

main().catch((e) => {
  console.error(e);
});
