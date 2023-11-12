//session id와 같은 user의 profile 찾기

import { NextApiHandler } from "next";
import apiHandler, { ResponseType } from "../../lib/server/apiHandler";
import client from "../../lib/server/client";
import { withApiSession } from "../../lib/server/withSession";

const handler: NextApiHandler<ResponseType> = async (req, res) => {
  const profile = await client.user.findUnique({
    where: { id: req.session.user?.id },
  });

  res.json({
    ok: true,
    profile,
  });
};

export default withApiSession(apiHandler({ method: "GET", handler }));
//req.session.user, save, destroy 사용 가능
