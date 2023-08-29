interface Props{
    description:string
}
export default function DescriptionUI({description}:Props){

    if (description.length > 1){
        return(
            <>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card shadow-2xl">
                            <div className="card-body ">
                                <h2 className="card-title">Description</h2>
                                <p className="card-text ">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}