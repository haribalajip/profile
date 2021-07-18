import * as HeroIcons from '@heroicons/react/outline';

const FeatureSection = (props) => {
  return (
    <div className="p-6 md:p-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {props.config.title}
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {
              props.config.list.map(item => {
                const TAGNAME = HeroIcons[item.svgName];
                return (
                  <div className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <TAGNAME className="h-6 w-6"/>
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{item.title}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                )
              })
            }
          </dl>
        </div>
      </div>
    </div>
  )
}
export default FeatureSection;