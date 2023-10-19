import Input from "@/components/Input";

export default function AccountForm() {
  return (
    <div className="w-[90%] mx-auto mt-7">
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <Input
            label={"Customer ID"}
            type="text"
            placeholder="Customer Id"
            htmlFor="Customer_Id"
          />
          <Input
            label={"Company"}
            type="text"
            placeholder="Company"
            htmlFor="Company"
          />
          <Input
            label={"Customer Name"}
            type="text"
            placeholder="Customer Name"
            htmlFor="customer_name"
          />
          <Input
            label={"Address"}
            type="text"
            placeholder="Address"
            htmlFor="Address"
          />
          <Input
            label={"Bank Name"}
            type="text"
            placeholder="Bank Name"
            htmlFor="bank_name"
          />
          <Input
            label={"Telephone"}
            type="text"
            placeholder="Telephone"
            htmlFor="Tel"
          />
          <Input
            label={"Account Name"}
            type="text"
            placeholder="Account Name"
            htmlFor="account_name"
          />
          <Input label={"Fax"} type="text" placeholder="Fax" htmlFor="Fax" />
          <Input
            label={"Branch"}
            type="text"
            placeholder="Branch"
            htmlFor="Branch"
          />
          <Input
            label={"Email"}
            type="email"
            placeholder="Email"
            htmlFor="Email"
          />
          <Input
            label={"Account Number"}
            type="number"
            placeholder="Account Number"
            htmlFor="account_number"
          />
          <Input
            label={"Website"}
            type="url"
            placeholder="Website"
            htmlFor="Website"
          />
          <Input
            label={"Swift Code"}
            type="text"
            placeholder="Swift Code"
            htmlFor="swift_code"
          />
        </div>
        <div className="w-full flex justify-center my-6">
          <button
            type="submit"
            className=" text-white bg-[#221C63] hover:bg-[#857de0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}
