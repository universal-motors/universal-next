"use client";
import agent from "@/api/agent";
import { BodyType } from "@/models/Master/BodyType";
import { CarModel } from "@/models/Master/CarModel";
import { Colors } from "@/models/Master/Colors";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FuelType } from "@/models/Master/FuelType";
import { Make } from "@/models/Master/Make";
import { Transmission } from "@/models/Master/Transmission";
import { SearchSelect, SearchSelectItem } from "@tremor/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface Props {
  bodyTypes: BodyType[]; //tblBodyTypes[],
  makes: Make[]; //tblMakes[],
  yearList: string[];
  // stockcars : StockCars[]
  color: Colors[];
  transmission: Transmission[];
  drivetrain: DrivetrainType[];
  fuel: FuelType[];
}

const GetModelWiseMakeList = async (modelID: string) => {
  return await agent.LoadData.carModelByMakeList(modelID); // db.tblBodyTypes.findMany({where: {isActive:true}});
};

export default function CarsSimpleSearch({
  bodyTypes,
  makes,
  yearList,
  color,
  transmission,
  drivetrain,
  fuel,
}: Props) {
  const router = useRouter();
  const [isMore, setIsMore] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [makeId, setMakeId] = useState("0");
  const [mappedModels, setMappedModels] = useState<CarModel[]>([]);
  const [modelId, setModelId] = useState("0");
  const [colorId, setColorId] = useState("0");
  const [transmissionId, setTransmissionId] = useState("0");
  const [drivetrainId, setDrivetrainId] = useState("0");
  const [fuelId, setFuelId] = useState("0");
  const [bodyTypeId, setBodyTypeId] = useState("0");
  const [fromYear, setFromYear] = useState("0");
  const [toYear, setToYear] = useState("0");
  const [steeringTypeId, setSteeringTypeId] = useState("0");
  const handleValueChange = async (selectedValue: string) => {
    const selectedMakeID = selectedValue;
    setMakeId(selectedMakeID);
    const modelbymake = await GetModelWiseMakeList(selectedMakeID); // models.filter(x=>x.makeId == parseInt(selectedValue));
    setMappedModels(modelbymake.data);
  };

  const renderMappedModels = () => {
    if (mappedModels.length > 0) {
      return (
        <SearchSelect value={modelId} onValueChange={setModelId}>
          {mappedModels.map((model) => (
            <SearchSelectItem
              key={model.modelId}
              value={model.modelId.toString()}
            >
              {model.modelName}
            </SearchSelectItem>
          ))}
        </SearchSelect>
      );
    }

    return (
      <SearchSelect value={makeId} onValueChange={handleValueChange} disabled>
        <SearchSelectItem value="0">Select...</SearchSelectItem>
      </SearchSelect>
    );
  };

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    //console.log(makeId,"MakeID, ", modelId, "ModelID, ", bodyTypeId, "BodyTypeID")

    const params = new URLSearchParams();

    params.set("searchFromBox", "true");
    if (makeId !== "0") params.set("makeID", makeId);
    if (modelId !== "0") params.set("modelID", modelId);
    if (bodyTypeId != "0") params.set("bodyTypeID", bodyTypeId);
    if (steeringTypeId != "0") params.set("steeringID", steeringTypeId);
    if (fromYear != "0") params.set("fromYear", fromYear);
    if (toYear != "0") params.set("toYear", toYear);

    setLoading(true);
    router.push(`/global/results/cars?${params.toString()}`);
  }

  return (
    // <div className='showcase-Box carform mb-5'>
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="row  mt-4 gap-y-2 !overflow-scroll sm:!overflow-visible  h-[350px] sm:h-auto  border border-gray-200 mx-2   bg-slate-100 rounded-2xl py-3 shadow-md" style={{ overflowY: 'hidden' }}>
        <div className="col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Make:
          </label>
          {/*<SearchSelect value={makeId} onValueChange={setMakeId}>*/}
          <SearchSelect value={makeId} onValueChange={handleValueChange}>
            {makes
              .filter((make) => make.vehicleTypeId == 1)
              .map((make) => (
                <SearchSelectItem
                  key={make.makeId}
                  value={make.makeId.toString()}
                >
                  {make.makeName}
                </SearchSelectItem>
              ))}
          </SearchSelect>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Model:
          </label>
          {renderMappedModels()}
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Model Code:
          </label>
          <input
            placeholder="Model Code"
            // value={value}
            // onChange={onChange}
            className=" border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Body Type:
          </label>
          <SearchSelect value={bodyTypeId} onValueChange={setBodyTypeId}>
            {bodyTypes.map((bodytype) => (
              <SearchSelectItem
                key={bodytype.bodyTypeId}
                value={bodytype.bodyTypeId.toString()}
              >
                {bodytype.typeOfBody}
              </SearchSelectItem>
            ))}
          </SearchSelect>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Steering:
          </label>
          <SearchSelect
            value={steeringTypeId}
            onValueChange={setSteeringTypeId}
          >
            <SearchSelectItem
              value="1"
              style={{ borderBottom: "1px solid black" }}
            >
              Right Hand
            </SearchSelectItem>
            <SearchSelectItem value="2">Left Hand</SearchSelectItem>
          </SearchSelect>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Drivetrain:
          </label>
          <SearchSelect value={drivetrainId} onValueChange={setDrivetrainId}>
            {drivetrain.map((train) => (
              <SearchSelectItem
                key={train.drivetrainId}
                value={train.drivetrainId.toString()}
              >
                {train.drivetrainType}
              </SearchSelectItem>
            ))}
          </SearchSelect>
        </div>
        {isMore && (
          <>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="showcase-Boxselect ">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Engine Size:
                </label>
                <div className="flex flex-col lg:flex-row flex-wrap justify-between">
                  <div className="w-full lg:w-[49%] h-15 ">
                    <input
                      type="number"
                      placeholder="Engine Size(cc)"
                      // value={value}
                      // onChange={onChange}
                      className=" border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full lg:w-[49%]">
                    <input
                      type="number"
                      placeholder="Engine Size(cc)"
                      // value={value}
                      // onChange={onChange}
                      className=" border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="showcase-Boxselect">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Manufacturing Year:
                </label>
                <div className="flex flex-col lg:flex-row flex-wrap justify-between">
                  <div className="flex-none w-full lg:w-[49%] h-15 ">
                    <SearchSelect
                      placeholder="starting year"
                      value={fromYear}
                      onValueChange={setFromYear}
                    >
                      {yearList.map((year) => (
                        <SearchSelectItem key={year} value={year.toString()}>
                          {year}
                        </SearchSelectItem>
                      ))}
                    </SearchSelect>
                  </div>
                  <div className="w-full lg:w-[49%] w-30">
                    <SearchSelect
                      placeholder="ending year"
                      value={toYear}
                      onValueChange={setToYear}
                    >
                      {yearList.map((year) => (
                        <SearchSelectItem key={year} value={year.toString()}>
                          {year}
                        </SearchSelectItem>
                      ))}
                    </SearchSelect>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="showcase-Boxselect">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Milage:
                </label>
                <div className="flex flex-col lg:flex-row flex-wrap justify-between">
                  <div className="w-full lg:w-[49%] h-15 ">
                    <input
                      placeholder="Milage"
                      type="number"
                      // value={value}
                      // onChange={onChange}
                      className=" border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="w-full lg:w-[49%] w-30">
                    <input
                      type="number"
                      placeholder="Milage"
                      // value={value}
                      // onChange={onChange}
                      className=" border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Transmission:
              </label>
              <SearchSelect
                value={transmissionId}
                onValueChange={setTransmissionId}
              >
                {transmission.map((trans) => (
                  <SearchSelectItem
                    key={trans.transmissionId}
                    value={trans.transmissionId.toString()}
                  >
                    {trans.transmissionName}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Fuel:
              </label>
              <SearchSelect value={fuelId} onValueChange={setFuelId}>
                {fuel.map((fueltype) => (
                  <SearchSelectItem
                    key={fueltype.fuelTypeId}
                    value={fueltype.fuelTypeId.toString()}
                  >
                    {fueltype.typeOfFuel}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Exterior Color:
              </label>
              <SearchSelect value={colorId} onValueChange={setColorId}>
                {color.map((color) => (
                  <SearchSelectItem
                    key={color.colorId}
                    value={color.colorId.toString()}
                  >
                    {color.colorName}
                  </SearchSelectItem>
                ))}
              </SearchSelect>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Max Loading Capacity:
              </label>
              <input
                placeholder="Max Loading Capacity"
                type="number"
                // value={value}
                // onChange={onChange}
                className=" border border-gray-300 text-gray-900 text-xs rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </>
        )}
        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-6 flex items-center">
          <span
            className="text-blue-700 cursor-pointer  text-sm underline "
            onClick={() => {
              setIsMore(!isMore);
            }}
          >
            {isMore ? "Show less" : "Show More"}
          </span>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-6">
          {/* <div className='showcase-Boxbtn'> */}
          <button className="mt-4 w-full font-semibold bg-slate-500 p-2 rounded-xl text-white hover:border-2 hover:border-slate-500 hover:bg-transparent hover:!text-slate-500 ">
            {isLoading ? (
              // This is where you'd add your loading spinner.
              // You can use an SVG, an image, or anything else you'd like.
              // For this example, I'll just use text.
              <span>Loading...</span>
            ) : (
              <span>Search</span>
            )}
          </button>
          {/* <Button>

            </Button> */}
          {/* </div> */}
        </div>
      </div>
    </form>
  );
}
