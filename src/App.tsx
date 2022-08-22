import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./molecule/loader";
import NavBar from "./molecule/nav-bar";
import PageLayout from "./organism/PageLayout";
import { DataModel, fetchData } from "./store/reducer";

function App() {
  const dispatch = useDispatch();
  const data: any = useSelector<DataModel>((state) => state.data);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, []);

  if (data === undefined) {
    return <h1 className="text-2xl text-center">Loading</h1>;
  }

  return (
    <div>
      <NavBar />
      <PageLayout>
        <div className="flex justify-between center my-5 ">
          <Loader
            title="Total Active Cases"
            pathColor="#d94d3d"
            textColor="#d94d3d"
            text={data.totalActiveCases}
            value={
              (data.totalActiveCases /
                (data.totalConfirmedCases + data.totalActiveCases)) *
              100
            }
          />

          <Loader
            title="Total Confirmed Cases"
            text={data.totalConfirmedCases}
            value={data.totalConfirmedCases}
          />
          <Loader
            title="Total Death"
            pathColor="#9d1212"
            textColor="#9d1212"
            text={data.death}
            value={(data.death / (data.totalConfirmedCases + data.death)) * 100}
          />

          <Loader
            title="Total Discharged"
            pathColor="#21AD71"
            textColor="#21AD71"
            text={data.discharged}
            value={
              (data.discharged / (data.totalConfirmedCases + data.discharged)) *
              100
            }
          />
        </div>

        <div className="bg-white h-[50%] overflow-auto">
          <div className="thead bg-[#21AD71] ">
            <div className="text-center font-semibold text-white text-lg p-3">
              S/N
            </div>
            <div className="text-center font-semibold text-white text-lg p-3">
              State
            </div>
            <div className="text-center font-semibold text-white text-lg p-3">
              Discharged
            </div>
            <div className="text-center font-semibold text-white text-lg p-3">
              Death
            </div>
            <div className="text-center font-semibold text-white text-lg p-3">
              Confirmed Cases
            </div>
            <div className="text-center font-semibold text-white text-lg p-3">
              Cases On Admission
            </div>
          </div>
          {data.states?.map((state: any, i: number) => (
            <div key={state._id} className="thead">
              <div className="tbody  ">{i + 1}</div>
              <div className=" tbody">{state.state}</div>
              <div className=" bg-[#21AD71] text-white tbody">
                {state.discharged}
              </div>
              <div className=" bg-[#ff5555] tbody ">{state.death}</div>
              <div className=" bg-[#fff655] tbody">{state.confirmedCases}</div>
              <div className=" bg-[#55ffd4] tbody">
                {state.casesOnAdmission}
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    </div>
  );
}

export default App;
