interface Props {
  description: string;
}
export default function DescriptionUI({ description }: Props) {
  const items = description.split("-").filter((item) => item.trim() !== "");

  if (description.length > 1) {
    return (
      <>
        <div className="row">
          <div className="col-sm-12">
            <div className="card ">
              <div className="card-body ">
                <h2 className="!text-[14px] sm:!text-[20px]">Description</h2>
                <p className="card-text ">
                  <ul className="list-disc pl-3">
                    {items.map((item, index) => (
                      <li className="!text-[12px] sm:!text-[16px] " key={index}>
                        {item.trim()}
                      </li>
                    ))}
                  </ul>
                  {/*{description}*/}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
