//api 요청의 유효성 검사, 예외처리 진행

import { NextApiHandler } from "next";

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

interface ConfigType {
  method: "GET" | "POST" | "DELETE";
  handler: NextApiHandler;
  isPrivate?: boolean;
}

export default function apiHandler({
  method,
  handler,
}: ConfigType): NextApiHandler {
  return async function (req, res) {
    if (req.method !== method) {
      return res.status(405).end();
    }

    try {
      await handler(req, res);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error });
    }
  };
}
