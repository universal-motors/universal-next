import { BodyType } from "@/models/Master/BodyType";
import { Make } from "@/models/Master/Make";
import HomeUITabGroup from "@/components/ui/HomeUITabGroup";

interface Props {
  bodyTlist: BodyType[];
  makeList: Make[];
}

const initialState = {
  modelId: 0,
  makeId: 0,
  bodyTypeId: 0,
  steeringTypeId: 0,
  fromYear: 0,
  toYear: 0,
};

export default async function HomeUI({ makeList, bodyTlist }: Props) {
  return (
    <>
      <div>
        <div className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'>
          <HomeUITabGroup makes={makeList} bodyTypes={bodyTlist} />
        </div>
      </div>
    </>
  );
}
