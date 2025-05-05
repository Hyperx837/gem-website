import Button from "@/components/Button";
import { BlueGems, NecklaceIcon, NI, Pearl } from "@/components/SVG";

const Body = () => (
  <div>
    <div className="flex p-10 justify-items-center w-[90%] mx-auto flex-col lg:flex-row gap-[2rem]">
      <div className="w-full  flex flex-col flex-[60]">
        <span className="text-5xl my-10 dm-serif">
          The Best Gems In The Country
        </span>
        <span className="my-10 montserrat ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptisunt
          vero autem sequi error, consectetur dolore doloribus enim quae nisi
          reiciendis sint nostrum. Perferendis ipsum magni quod vero accusamus
          velit?
        </span>
        <Button className="p-3 h-12 w-[12rem] montserrat">Take a peek</Button>
      </div>

      <BlueGems className="w-full flex-[40] bounce" />
      {/* <Image src={Icon} className="size-96 mx-auto" alt="hutto" /> */}
    </div>
    <div className="flex p-10 justify-items-center w-[90%] mx-auto flex-col lg:flex-row-reverse gap-[2rem]">
      <div className="w-full  flex flex-col flex-[60] lg:pt-[3rem]">
        <span className="text-5xl my-10 dm-serif">
          We Serve The Best Jewelery
        </span>
        <span className="my-10 montserrat ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptisunt
          vero autem sequi error, consectetur dolore doloribus enim quae nisi
          reiciendis sint nostrum. Perferendis ipsum magni quod vero accusamus
          velit?
        </span>
        <Button className="p-3 h-12 w-[12rem] montserrat">Buy Today</Button>
      </div>

      <div className="grid grid-cols-4 grid-rows-4 w-full flex-[40] justify-items-center">
        <Pearl className="col-span-2 row-span-2 bounce" />
        <NI className="col-span-2 row-span-2 bounce" />
        <NecklaceIcon className="col-span-4 row-span-2 bounce" />
      </div>
      {/* <Image src={Icon} className="size-96 mx-auto" alt="hutto" /> */}
    </div>
  </div>
);

export default Body;
