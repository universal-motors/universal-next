import { Machinery } from "@/models/Machinery";
import { Axle } from "@/models/Master/Axle";
import { BodyType } from "@/models/Master/BodyType";
import { CarCondition } from "@/models/Master/CarCondition";
import { CarModel } from "@/models/Master/CarModel";
import { CarOptions } from "@/models/Master/CarOptions";
import { CarOptionsMapping } from "@/models/Master/CarOptionsMapping";
import { Colors } from "@/models/Master/Colors";
import { Country } from "@/models/Master/Country";
import { DrivetrainType } from "@/models/Master/DrivetrainType";
import { FreightCost } from "@/models/Master/FreightCost";
import { FuelType } from "@/models/Master/FuelType";
import { InspectionCost } from "@/models/Master/InspectionCost";
import { Make } from "@/models/Master/Make";
import { PortMapping } from "@/models/Master/PortMapping";
import { Ports } from "@/models/Master/Ports";
import { SteeringType } from "@/models/Master/SteeringType";
import { StockPictures } from "@/models/Master/StockPictures";
import { Transmission } from "@/models/Master/Transmission";
import { VehicleCategory } from "@/models/Master/VehicleCategory";
import { StockCars } from "@/models/StockCars";
import { Trucks } from "@/models/Trucks";
//import { Customer, UserFormValues } from "@/models/Customer";
import {
  ConsigneeCourier,
  CourierDispatch,
  Customer,
  CustomerSignUp,
} from "@/models/Customer";
import { PaginationHeader } from "@/models/Master/Pagination";

//const baseURL = 'https://localhost:5001/api/';
const baseURL = "https://api20230805195433.azurewebsites.net/api/";
const parseResponse = async <T>(
  response: Response
): Promise<{ data: T; paginationHeader: PaginationHeader }> => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: T = await response.json();
  const paginationHeaderRaw = response.headers.get("X-Pagination");
  const paginationHeader = paginationHeaderRaw
    ? JSON.parse(paginationHeaderRaw)
    : null;

  return {
    data,
    paginationHeader,
  };
};

const parseUserResponse = async <Customer>(
  response: Response
): Promise<Customer> => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data: Customer = await response.json();
  return data;
};

const request = {
  get: async <T>(url: string) => {
    const response = await fetch(baseURL + url);
    return parseResponse<T>(response);
  },

  post: async <T>(url: string, body: object) => {
    const response = await fetch(baseURL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return parseResponse<T>(response);
  },
  put: async <T>(url: string, body: object) => {
    const response = await fetch(baseURL + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    return parseResponse<T>(response);
  },
  delete: async <T>(url: string) => {
    const response = await fetch(baseURL + url, {
      method: "DELETE",
    });
    return parseResponse<T>(response);
  },
};

const LoadData = {
  //------ Main Units

  stockList: (filter: string, currentPage: number) =>
    request.get<StockCars[]>(
      `carstock?PageSize=25&pageNumber=${currentPage}&${filter}`
    ),
  truckList: (filter: string, currentPage: number) =>
    request.get<Trucks[]>(
      `trucks?PageSize=25&pageNumber=${currentPage}&${filter}`
    ),
  machineryList: () =>
    request.get<Machinery[]>("machinery?pageNumber=1&pageSize=50"),
  homepageStockList: () => request.get<StockCars[]>("carstock/homepage_cars"),

  stock: (stockID: number) => request.get<StockCars>(`carstock/${stockID}`),
  truck: (stockID: number) => request.get<Trucks>(`trucks/${stockID}`),

  stockSliderList: (stockID: number) =>
    request.get<StockPictures[]>(`carstock/imagestock/${stockID}`),

  //------ Master Data
  countryList: () => request.get<Country[]>("masterdata/country"),
  inventoryLocationList: () => request.get<Country[]>("masterdata/inventory"),
  carMakeList: () => request.get<Make[]>("masterdata/make"),
  truckMakeList: () => request.get<Make[]>("masterdata/make/2"),
  machineryMakeList: () => request.get<Make[]>("masterdata/make/3"),
  bodyTypeList: () => request.get<BodyType[]>("masterdata/bodytype"),
  fuelTypeList: () => request.get<FuelType[]>("masterdata/fueltype"),
  carModelList: () => request.get<CarModel[]>("masterdata/carmodel"),
  carModelByMakeList: (makeID: string) =>
    request.get<CarModel[]>(`masterdata/carmodel/${makeID}`),
  drtivetrainList: () =>
    request.get<DrivetrainType[]>("masterdata/drivetraintype"),
  steeringList: () => request.get<SteeringType[]>("masterdata/steeringtype"),
  colorsList: () => request.get<Colors[]>("masterdata/colors"),
  transmissionsList: () =>
    request.get<Transmission[]>("masterdata/transmissions"),
  carCondiionList: () => request.get<CarCondition[]>("masterdata/carcondition"),
  axleList: () => request.get<Axle[]>("masterdata/axle"),
  portsList: () => request.get<Ports[]>("masterdata/ports"),

  vehicleCategoryList: () =>
    request.get<VehicleCategory[]>("masterdata/vehiclecategory"),
  caroptionsList: () => request.get<CarOptions[]>("masterdata/caroptions"),

  // Required Parameter
  caroptionMappingList: (stockID: number) =>
    request.get<CarOptionsMapping[]>(`carstock/caroptions/${stockID}`),

  //------ Computational
  inspectioncost: () =>
    request.get<InspectionCost[]>("compute/inspectioncost/"),
  freightcost: () => request.get<FreightCost[]>("compute/freightcost/"),
  portmapping: () => request.get<PortMapping[]>("compute/portmapping/"),
  getClientIP: () => request.get<string>("compute/getClientIP/"),
  stockCount: () => request.get<number>("carstock/count"),
  carmodelCount: (modelID: number) =>
    request.get<number>(`compute/carmodel/count/${modelID}`),
  makeCount: (makeID: number) =>
    request.get<number>(`compute/make/count/${makeID}`),
  bodytypeCount: (bodytypeID: number) =>
    request.get<number>(`compute/bodytype/count/${bodytypeID}`),
  steeringTypeCount: (steeringID: number) =>
    request.get<number>(`compute/steeringType/count/${steeringID}`),

  //----- Customer Data
  generateCustomerCode: (locationID: number) =>
    request.get<string>(`customers/GenerateCustomerCode/${locationID}`),
  customerCheck: (email: string) =>
    request.get<boolean>(`customers/Exists/${email}`),
  register: (user: CustomerSignUp) => registertUser(user), //request.post<CustomerSignUp>('authentication', user),
  customerProfile: (email: string) =>
    request.get<Customer[]>(`customers/ByEmail/${email}/`),
  consigneeCourierByCustomer: (customerID: number) =>
    request.get<ConsigneeCourier[]>(`customers/Consignee/${customerID}`),
  consigneeCourierByID: (id: number) =>
    request.get<ConsigneeCourier[]>(`customers/Consignee/id/${id}`),
  courierDispatchByCustomer: (customerID: number) =>
    request.get<CourierDispatch[]>(`customers/CourierDispatch/${customerID}`),
  courierDispatchByID: (id: number) =>
    request.get<CourierDispatch[]>(`customers/CourierDispatch/id/${id}`),
};
//
// const Account = {
//   //   -------Accounts
//   currentUser: async (token: string): Promise<Customer> => await getUser(token),
//   //request.get<Customer>('authentication', user),
//   register: (user: UserFormValues) => registertUser(user), //request.post<Customer>('authentication', user),
//   login: (user: UserFormValues) =>
//     request.post<{ token: string }>("authentication/login", user),
// };

const StockCount = getData();

const agent = {
  LoadData,
  // Account,
  StockCount,
  basUrl: baseURL,
};

export default agent;

async function getData() {
  const res = await fetch(baseURL + "carstock/count", {
    next: { revalidate: 18000 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function registertUser(user: CustomerSignUp) {
  try {
    const response = await fetch(
      "https://api20230805195433.azurewebsites.net/api/customers", //agent.basUrl+'authentication/',
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      }
    );
    console.log(response);
    if (!response.ok) {
      throw new Error(
        "Something went wrong, we cant register you at the moment"
      );
    }

    // await signIn("credentials", {
    //   username: user.username,
    //   password: user.password,
    // });

    console.log("Account created successfully");
  } catch (e) {
    console.log(e);
  }
}
//
// async function getUser(token: string): Promise<Customer> {
//   const currentUser = await fetch(
//     "https://api20230805195433.azurewebsites.net/api/authentication",
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`, // Adding the Bearer token to the headers
//       },
//     }
//   );
//   const response = await parseUserResponse(currentUser);
//   console.log(response);
//   return response as Customer;
// }
