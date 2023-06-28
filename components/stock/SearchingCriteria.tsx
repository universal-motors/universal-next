export default function SearchingCriteria(){
    return(
        <>
            <div className="results">
                <h4>Search Page Result  - <span>@Cars.Count()</span> Matches Found</h4>
                <h5>
                    View vehicles <strong>shipping from</strong>:
                </h5>
                <ul className="nav nav-tab mt-5" role="tablist">
                    <li className="nav-item all">
                        <a className="nav-link2 active" data-toggle="tab" href="#tabs-all" role="tab">ALL</a>
                    </li>
                    @foreach (var loc in Helpers.MasterData.Locations.Where(x =&gt; x is {'{'} IsInventoryLocation: true {'}'}))
                    {'{'}
                    <li className="nav-item">
                        <a className="nav-link2 " data-toggle="tab" href="/Cars/@loc.CountryId/Country" role="tab">
                            <img src="images/flags/@(loc.Slug).svg" className="img-fluid" alt="@loc.Slug" /> <span>@loc.CountryName</span>
                        </a>
                    </li>
                    {'}'}
                    <div className="filt">
                        <p>Sort By: &nbsp;</p>
                        <select name="sort-by" className="sort-by-select">
                            <option>Select</option>
                            <option value="priceLowToHigh">Price Low to high</option>
                            <option value="priceHighToLow">Price high to low</option>
                            <option value="yearOldToNew">Year old to new</option>
                            <option value="yearNewToOld">Year new to old</option>
                            <option value="discountHighToLow">Discount high to low</option>
                            <option value="discountLowToHigh">Discount low to high</option>
                            <option value="engineHighToLow">Engine high to low</option>
                            <option value="engineLowToHigh">Engine low to high</option>
                            <option value="mileageHighToLow">Mileage high to low</option>
                            <option value="mileageLowToHigh">Mileage low to high</option>
                        </select>
                    </div>
                </ul>
            </div>

        </>
    )
}