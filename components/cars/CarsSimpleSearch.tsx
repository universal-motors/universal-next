'use client'
import {Form} from "react-bootstrap";
import {Button, SearchSelect, SearchSelectItem} from "@tremor/react";
import {FormEvent, useState} from "react";
import {CarModel} from "@/models/Master/CarModel";
import agent from "@/api/agent";
import {BodyType} from "@/models/Master/BodyType";
import {Make} from "@/models/Master/Make";
import {StockCars} from "@/models/StockCars";
import {useRouter} from "next/navigation";

interface Props {
    bodyTypes: BodyType[], //tblBodyTypes[],
    makes: Make[]//tblMakes[],
    yearList: string[]
   // stockcars : StockCars[]
}


const GetModelWiseMakeList = async ( modelID:string) => {

    return await agent.LoadData.carModelByMakeList(modelID);// db.tblBodyTypes.findMany({where: {isActive:true}});
}

export default function CarsSimpleSearch({bodyTypes, makes,yearList}: Props) {
    const router = useRouter();
    const [isLoading,setLoading]=useState(false);
    const [makeId, setMakeId] = useState("0");
    const [mappedModels, setMappedModels] = useState<CarModel[]>([]);
    const [modelId, setModelId] = useState("0");
    const [bodyTypeId, setBodyTypeId] = useState("0");
    const [fromYear, setFromYear] = useState("0");
    const [toYear, setToYear] = useState("0");
    const [steeringTypeId, setSteeringTypeId] = useState("0");
    const  handleValueChange = async (selectedValue:string) => {
        const selectedMakeID =selectedValue;
        setMakeId(selectedMakeID)
        const modelbymake = await  GetModelWiseMakeList(selectedMakeID);// models.filter(x=>x.makeId == parseInt(selectedValue));
        setMappedModels(modelbymake.data)

    };

    const renderMappedModels = () => {

        if (mappedModels.length>0){
            return(
                <SearchSelect value={modelId} onValueChange={setModelId}>
                    {
                        mappedModels.map((model) => (
                            <SearchSelectItem key={model.modelId} value={model.modelId.toString()}>
                                {model.modelName}
                            </SearchSelectItem>
                        ))
                    }
                </SearchSelect>
            )
        }

        return(
            <SearchSelect value={makeId} onValueChange={handleValueChange} disabled>

                <SearchSelectItem value="0" >
                    Select...
                </SearchSelectItem>
            </SearchSelect>
        )
    }

    function handleSubmit(event:FormEvent){
        event.preventDefault()
        //console.log(makeId,"MakeID, ", modelId, "ModelID, ", bodyTypeId, "BodyTypeID")

        const params = new URLSearchParams();

        params.set("searchFromBox", "true")
        if (makeId !== "0") params.set("makeID", makeId)
        if (modelId !== "0") params.set("modelID", modelId)
        if (bodyTypeId != "0") params.set("bodyTypeID", bodyTypeId)
        if (steeringTypeId != "0") params.set("steeringID", steeringTypeId)
        if (fromYear != "0") params.set("fromYear", fromYear)
        if (toYear != "0") params.set("toYear", toYear)
        params.set("PageNumber", "1")

        setLoading(true);
        router.push(`/global/results/cars?${params.toString()}`)
    }

    return (
        <div className="showcase-Box carform mb-5">
            <Form onSubmit={handleSubmit} autoComplete="off">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <label>Make: </label>
                        {/*<SearchSelect value={makeId} onValueChange={setMakeId}>*/}
                        <SearchSelect value={makeId} onValueChange={handleValueChange}>
                            {
                                makes
                                    .filter(make=>make.vehicleTypeId == 1)
                                    .map(make=> (
                                    <SearchSelectItem key={make.makeId} value={make.makeId.toString()} >
                                        {make.makeName} { }
                                    </SearchSelectItem>
                                ))
                            }
                        </SearchSelect>
                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <label>Model:</label>
                        {
                            renderMappedModels()
                        }
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <label>Body Type: </label>
                        <SearchSelect value={bodyTypeId} onValueChange={setBodyTypeId}>

                            {
                                bodyTypes.map(bodytype=> (
                                    <SearchSelectItem key={bodytype.bodyTypeId} value={bodytype.bodyTypeId.toString()} >
                                        {bodytype.typeOfBody}
                                    </SearchSelectItem>
                                ))
                            }
                        </SearchSelect>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <label>Steering: </label>
                        <SearchSelect value={steeringTypeId} onValueChange={setSteeringTypeId}>
                            <SearchSelectItem value="1" >
                                Right Hand
                            </SearchSelectItem>
                            <SearchSelectItem value="2" >
                                Left Hand
                            </SearchSelectItem>
                        </SearchSelect>


                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="showcase-Boxselect">
                            <label>Manufacturing Year:</label>
                            <div className="flex flex-column">
                                <div className="flex-none w-30 h-15 ">
                                    <SearchSelect value={fromYear} onValueChange={setFromYear}>
                                        {
                                            yearList.map(year=> (
                                                <SearchSelectItem key={year} value={year.toString()} >
                                                    {year}
                                                </SearchSelectItem>
                                            ))
                                        }
                                    </SearchSelect>
                                </div>
                                <div className="flex-auto w-30">
                                    <SearchSelect value={toYear} onValueChange={setToYear}>
                                        {
                                            yearList.map(year=> (
                                                <SearchSelectItem key={year} value={year.toString()} >
                                                    {year}
                                                </SearchSelectItem>
                                            ))
                                        }
                                    </SearchSelect>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-8 col-sm-6 col-6">
                        <div className="showcase-Boxbtn">
                            <Button>
                                {isLoading ? (
                                    // This is where you'd add your loading spinner.
                                    // You can use an SVG, an image, or anything else you'd like.
                                    // For this example, I'll just use text.
                                    <span>Loading...</span>
                                ) : (
                                    <span>Search</span>
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    )
}