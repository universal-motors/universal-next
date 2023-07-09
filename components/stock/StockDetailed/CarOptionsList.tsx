import agent from "@/api/agent";
interface Props {
    stockID : number
}
export default async function CarOptionList({stockID}:Props){
    const stockOptions = await agent.LoadData.caroptionMappingList(stockID);
    const optionsMaster = await agent.LoadData.caroptionsList()//db.tblCarOptions.findMany({where: {isActive:true}});
    return(
        <>
            <ul>
                {
                    stockOptions
                        .slice(0,5)
                     .map( op=> (
                        <li key={op.id}>
                            {
                                <span className="inline-flex items-center rounded-md bg-indigo-50 px-1.5 py-0.5 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                                    {optionsMaster.find(x=> x.optionId==op.carOptionsId)?.optionName}
                                </span>
                            }
                        </li>
                     ))
                }
                <li>
                    more...
                </li>
            </ul>
        </>
    )
}