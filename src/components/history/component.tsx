import LazyImage from "../lazy-image/component";
import Constants from "../../constants/constants";

const History: React.FC<{ config: typeof Constants.historySectionConfig }> = (
  props
) => {
  return (
    <div className="">
      <div className="text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-10">
          Work history
        </p>
      </div>
      {props.config.list.map((item) => {
        return (
          <div className="flex justify-center" key={item.logo}>
            <div className="w-2/3 flex flex-col md:flex-row items-center border border-gray-200 rounded mb-10">
              <LazyImage
                // lowResImg="low-res/hero.png"
                className="w-32 h-32 md:pl-6"
                src={item.logo}
              />
              <div className="p-8 text-left space-y-4">
                <blockquote>
                  <p className="text-gray-500">{item.description}</p>
                </blockquote>
                <div className="text-sm">
                  <div className="text-cyan-600">
                    {item.title}, {item.org}
                  </div>
                  <div className="text-gray-500">{item.duration}</div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default History;
