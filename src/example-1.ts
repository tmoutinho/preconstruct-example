type Human = {
  name: string;
};

type Robot = {
  designation: string;
  status: "idle" | "working";
};

// if type is Human, then return Human, otherwise return never
type GetRequiredInformation<TObj> = TObj extends Human ? Human : never;

type GetRequiredInformationForHumam = GetRequiredInformation<Human>; // { name: string }
type GetRequiredInformationForRobot = GetRequiredInformation<Robot>; // never
type GetRequiredInformationForNothing = GetRequiredInformation<{}>; // never

type Information<T, K extends keyof T, V> = {
  [P in K]: V;
};

type Cases = [
  Information<Human, "name", "test">, // { name: "test" }
  Information<Robot, "designation", "test"> // { designation: "test" }
];

export const Hello = () => {
  return null;
};
