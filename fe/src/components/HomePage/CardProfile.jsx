import persion from "src/assets/images/persion.png";

export const CardProfile = () => {
  return (
    <>
      <div>
        <div className="rounded-xl overflow-hidden">
          <img src={persion} alt="" className="object-cover w-full"/>
        </div>
        <div className="flex flex-col justify-center">
              <span
                className="text-textBlueCustom-900 truncate text-sm flex justify-center mt-4 mb-1">Backend developer</span>
          <span className="text-white truncate text-sm text-2xl flex justify-center mb-2">Motonami</span>
          <span
            className="text-white truncate text-sm flex justify-center mb-2">Nodejs, PHP, Reactjs, Vuejs...</span>
          <span className="text-white truncate text-sm flex justify-center">3 years experience</span>
        </div>
      </div>
    </>
  )
}