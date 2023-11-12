import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-gray-700">안녕하세요</h1>
      <div className="py-3">
        <p>
          안녕하세요! 제 이름은 hi이고, 이 카페에 새로 합류한 멤버입니다.
          여러분과 함께 즐거운 시간을 보내고 싶어요. 커피와 대화를 즐기며 새로운
          친구들을 만나는 걸 좋아해요. 삶에서 영감을 주는 이야기를 나누고 새로운
          것을 배우는 걸 즐깁니다. 함께 이 카페에서 특별한 순간들을 만들어봐요!
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
