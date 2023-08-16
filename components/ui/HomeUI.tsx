'use client'

import { Tab } from '@headlessui/react'
import {BodyType} from "@/models/Master/BodyType";
import {Make} from "@/models/Master/Make";
import agent from "@/api/agent";
import HomePageCarListings from "@/components/cars/HomePageCarListings";
import CarsSimpleSearch from "@/components/cars/CarsSimpleSearch";
import HomePageTruckListings from "@/components/trucks/HomePageTruckListings";
import TruckSimpleSearch from "@/components/trucks/TruckSimpleSearch";

function classNames(...classes:any[]) {
    return classes.filter(Boolean).join(' ')
}



interface TabType {
    name: string,
    href: string,
    current: boolean
}

const initialState = {
    modelId: 0,
    makeId: 0,
    bodyTypeId:0,
    steeringTypeId:0,
    fromYear:0,
    toYear: 0,

}

const GetBodyTypes = async () => {

    return await agent.LoadData.bodyTypeList();// db.tblBodyTypes.findMany({where: {isActive:true}});
}

const GetCarMakes = async () => {
    return await  agent.LoadData.carMakeList();//db.tblMakes.findMany({where: {isActive:true}} );
}

const GetTrucks = async () => {
    return await  agent.LoadData.truckList();//db.tblCarModels.findMany({where: {isActive:true}} );
}

const GetMachinery = async () => {
    return await  agent.LoadData.machineryList();//db.tblCarModels.findMany({where: {isActive:true}} );
}



export default async function HomeUI(){
    const bodyTypes = await GetBodyTypes();
    const makes = await GetCarMakes();
    // const trucks = await GetTrucks();
    // const machineries = await GetMachinery();
    const currentYear = new Date().getFullYear()
    const yearList = Array.from({ length: 16 }, (_, index) => (currentYear - index).toString());
    //const [filter, setFilter] = useState(initialState);
   // const [url, setUrl] = useState('/search?');
    //const queryParams:string[] = [];
  //  const router = useRouter();



    const tabs : TabType[] = [
        { name: 'Cars', href: '#', current: true },
        { name: 'Trucks', href: '#', current: false },
        { name: 'Heavy Machinery', href: '#', current: false },
    ]


    return(
        <>
            <div>
               <div className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {
                            tabs.map((tab) => (
                                <Tab key={tab.name} className={({ selected }) =>
                                    classNames(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                                >
                                    {tab.name}
                                </Tab>
                            ))
                        }

                    </Tab.List>
                    <Tab.Panels>

                            <Tab.Panel

                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <CarsSimpleSearch
                                    bodyTypes={bodyTypes}
                                    makes={makes}
                                    yearList={yearList}

                                />

                            </Tab.Panel>
                            <Tab.Panel

                                className={classNames(
                                    'rounded-xl bg-white p-3',
                                    'ring-white ring-opacity-80 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                                )}
                            >
                                <TruckSimpleSearch
                                    bodyTypes={bodyTypes}
                                    makes={makes}
                                    yearList={yearList}

                                />

                            </Tab.Panel>

                        <Tab.Panel>
                            {/*<div className="showcase-Box truckform">*/}
                            {/*    <form>*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
                            {/*                <div className="showcase-Boxselect">*/}
                            {/*                    <label>Make:</label>*/}
                            {/*                    <select className="custom-select">*/}
                            {/*                        <option >Select Make</option>*/}
                            {/*                        /!*@foreach (var make in Helpers.MasterData.Makes)*!/*/}
                            {/*                        /!*{'{'}*!/*/}
                            {/*                        /!*<option slug="@make.Slug" value="@make.MakeId">@make.MakeName</option>*!/*/}
                            {/*                        /!*{'}'}*!/*/}
                            {/*                    </select>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
                            {/*                <div className="showcase-Boxselect">*/}
                            {/*                    <label>Model:</label>*/}
                            {/*                    <select className="custom-select">*/}
                            {/*                        <option>Select Model</option>*/}
                            {/*                        /!*@foreach (var model in Helpers.MasterData.CarModels.Where(x =&gt; x.MakeId == search.MakeID))*!/*/}
                            {/*                        /!*{'{'}*!/*/}
                            {/*                        /!*<option slug="@model.ModelName" value="@model.ModelId">@model.ModelName</option>*!/*/}
                            {/*                        /!*{'}'}*!/*/}
                            {/*                    </select>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
                            {/*                <div className="showcase-Boxselect">*/}
                            {/*                    <label>Reg. Date from</label>*/}
                            {/*                    <select className="custom-select " name="bodytype" id="body-type-select">*/}
                            {/*                        <option>Any</option>*/}
                            {/*                        <option value="sedan">2022</option>*/}
                            {/*                        <option value="coupe">2021</option>*/}
                            {/*                        <option value="hatchback">2020</option>*/}
                            {/*                    </select>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
                            {/*                <div className="showcase-Boxselect">*/}
                            {/*                    <label>Miles to</label>*/}
                            {/*                    <select className="custom-select " name="bodytype" id="body-type-select">*/}
                            {/*                        <option>Any</option>*/}
                            {/*                        <option value="sedan">10,000</option>*/}
                            {/*                        <option value="coupe">20,000</option>*/}
                            {/*                        <option value="hatchback">30,0000</option>*/}
                            {/*                    </select>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}

                            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
                            {/*                <div className="showcase-Boxselect">*/}
                            {/*                    <label>Price Until:</label>*/}
                            {/*                    <select className="custom-select " name="steering" id="steering-select">*/}
                            {/*                        <option>Any</option>*/}
                            {/*                        <option value="sedan">$10,000</option>*/}
                            {/*                        <option value="coupe">$20,000</option>*/}
                            {/*                        <option value="hatchback">430,000</option>*/}
                            {/*                    </select>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}

                            {/*            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6">*/}
                            {/*                <div className="showcase-Boxbtn">*/}
                            {/*                    <button type="submit">Search</button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                            {/*<div className="carboxes mt-3">*/}
                            {/*    <HomePageTruckListings stockcars={stocks} />*/}
                            {/*</div>*/}
                        </Tab.Panel>

                    </Tab.Panels>
                </Tab.Group>
            </div>
            </div>


        </>
    )
}