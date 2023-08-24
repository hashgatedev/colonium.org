import React from "react";
import { useHorizontalScroll } from "../../lib/hooks/useHorizontalScroll";
import RoadmapItem from "./RoadmapItem";
import './road.css';


const Roadmap = () => {
  const roadmap_items = [

    {
      roadmapTitle: "Q2 2020",
      info: [
        "Main problem diagnosis.",
        "Development of a lean idea.",
        "Formation of a legal team.",
        "Inviting experts to collaborate.",
        "Launching a programming team.",
      ],
    },

    {
      roadmapTitle: "Q4 2020",
      info: [
        "Launching an R&D unit.",
        "Launching a networking team.",
        "Forming an algorithm and artificial intelligence team.",
        "Launching a multimedia group.",
        "Launching a network security team.",
        "Forming a design and graphic team.",
      ],
    },
    {
      roadmapTitle: "Q4 2021	",
      info: [
        "Promotion and finalization of the initial idea.",
        "Development of the Coloniume project.",
        "Release of the first White Paper.",
        "Release of the Roadmap.",
        "Design of the logo and graphic elements for Coloniume.",
        "Registration fo Coloniume company in Australia.",
        "Launching of the Coloniume website.",
        "Launching of the virtual space team.",
        "Launching of social media pages.",
      ],
    },
    {
      roadmapTitle: "Q4 2022",
      info: [
        "	Launching the Coloniume testnet.",
        "Developing a modern framework for internet mining.",
        "Launching the Coloniume wallet.",
        "Launching the Coloniume address scanner.",
        "Launching the Blue Angel's dashboard(mining dashboard).",
        
      ],
    },
    {
      roadmapTitle: "Q2 2023",
      info: [
        "Launching the Mainnet for Coloniume.",
        "Listing the Colonix currency on cryptocurrency exchanges.",
        "Listing Coloniume on CoinMarketCap.",
      ],
    },
    {
      roadmapTitle: "Q2 2023",
      info: [
        "Establishment of the International Coloniume Foundation.",
        "Invitation of legal companies in the IT field to collaborate with the foundation.",
      ],
    },
    {
      roadmapTitle: "Q2 2024",
      info: [
        "Providing second-generation devices for Coloniume.",
        "Developing internet sharing capabilities.",
      ],
    },
    {
      roadmapTitle: "Q4 2024",
      info: [
        "Establishing a private and secure Coloniume network.",
        "Developing a private messenger for use on the Coloniume network.",
      ],
    },
    {
      roadmapTitle: "Q2 2025",
      info: [
        "	Establishing infrastructure for processor and storage sharing services on the Coloniume network.",
      ],
    },
    {
      roadmapTitle: "Q4 2026",
      info: [
        "	Developing and constructing CPC computers for use on the Coloniume network.",
      ],
    },
    {
      roadmapTitle: "Q4 2028",
      info: [
        "Introducing the Coloniume network as a viable and completely free alternative to the global internet network.",
      ],
    },
    

  ];

  return (
    <section id="roadmap" className="roadmap-area pt-130 pb-130">
      <div className="container custom-container-two">
        <div className="row justify-content-center">
          <div className="">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Our Roadmap</span>
              <h2 className="title">
              Coloniume Strategy and Project <span>Plan</span>
              </h2>
            </div>
          </div>
        </div>

        <div className=" container-flui" id="roadmap">
          <div className="col-lg-12">
            <div
              className="bt-roadmap_x bt-roadmap-scrollbar" id="roadmob"
        
            >
              <div className="bt-roadmap-wrap" id="roadmaptext">
                {roadmap_items.map((x, index) => (
                  <RoadmapItem key={index} item={x} id="roadmaptext" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
