//api 라우트 생성 (server)
//http://localhost:3000/api/auth 에서 json응답 확인 가능

import { NextApiHandler } from "next";
import apiHandler, { ResponseType } from "../../lib/server/apiHandler";
import client from "../../lib/server/client";

const handler: NextApiHandler<ResponseType> = async (req, res) => {
  const payload = Math.floor(100000 + Math.random() * 900000) + "";
  const { email } = req.body;
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          //이 조건을 만족하는 user가 있는 경우 token과 연결
          where: {
            ...email,
          },
          //없으면 create
          create: {
            name: "Anonymous",
            ...email,
          },
        },
      },
    },
  });
  console.log(token);
  return res.json({
    ok: true,
  });
};

export default apiHandler({ method: "POST", handler });
