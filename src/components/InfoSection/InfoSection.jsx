import React from "react";
import style from './InfoSection.module.css';

const InfoSection = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newTab) => {
    setValue(newTab);
  };

  const tabs = [
    {
      title: 'What is Coloniume?',
      content: <div>
        <h3>What is Coloniume?</h3>
        <p>Coloniume is a decentralized, government-independent communication network that will be created, developed, and expanded by individuals, organizations, and non-governmental organizations (NGOs). The network's global reach will be facilitated through the participation of individuals worldwide.
        </p><p>The primary objective of launching Coloniume is to establish and expand a completely free, secure, non-governmental, and independent communication platform that cannot be censored, restricted, or influenced by any entity. Furthermore, this platform will ensure uninterrupted communication with other networks, regardless of any potential disruptions or geographical and political limitations.
        </p><p>In areas covered by Coloniume, even in the event of a network disconnection, it will be possible to exchange information and data locally without any geographical or political restrictions. Each node within the network will be able to connect to the Internet, acting as a bridge between the local network and the global Internet.
        </p>
      </div>,
    },
    {
      title: 'Overview',
      content: <div>
        <h3>U + Me = “Coloniume“</h3>
        <p class="">
          Coloniume is a new concept of a global network designed to provide free Internet access to people around the world. It is an exclusive, extensive, and powerful chain network that aims to reduce the digital divide and promote science, culture, economy, hygiene, and health globally. Our ultimate goal is to create a massive and free Coloniume network, which can be summarized in the following structure:
        </p><p>
          U + Me = “Coloniume”</p><p>
          By working together, we can create a cohesive, global colony that meets the interests and demands of everyone.
        </p>
      </div>,
    },
    {
      title: 'How it works',
      content: <div>
        <h3>How it works</h3>
        <p>Coloniume allows individuals to create their own communication network using mobile phones or network equipment, and share free internet with others via Wi-Fi. By doing so, they not only contribute to the stability of the Internet connection, but also become part of the Coloniume network and earn rewards for their participation.
        </p>
        <p>Even if the Internet is disconnected, network members can continue to freely send and receive data within the network.
        </p>
      </div>,
    },
    {
      title: 'Capabilities',
      content: <div>
        <h3>Capabilities</h3>
        <p>
          The Coloniume network offers a range of unique capabilities, including:</p>
        <ol>
          <li> The ability to set up an independent, free local and global communication network using second generation nodes (LINKER NODES).
          </li><li> Connectivity to the World Wide Web.
          </li><li> An independent blockchain network that provides secure and unlimited services.
          </li><li> The ability to create specific, decentralized, and unrestricted platforms and social networks.
          </li><li> A super safe messenger that allows for peer-to-peer exchange of information without any data storage (SNIF storage) for efficient communication in times of crisis and emergency.
          </li><li> The ability to create a suitable space for processors, storage servers, and clients.
          </li><li> The ability to build a Coloniume PC and connect to distributed memory and processors, enabling individuals to benefit from distributed storage and processing services in a cost-effective manner.
          </li>
        </ol>
        <p></p>
      </div>,
    },
    {
      title: 'Coloniume PC',
      content: <div>
        <h3>What is Coloniume PC?</h3>
        <p>Coloniume PCs, also known as Coloniume computers, are a revolutionary new generation of super-cheap computers that do not have their own processor or storage space, but instead rely on shared resources available on the Coloniume network. This means that network members who have spare resting time on their advanced systems can earn rewards, while people who cannot afford expensive hardware can benefit from low-cost processing and storage capabilities. In other words, Coloniume PCs provide an affordable and accessible solution to the problem of limited processing and storage resources, while also enabling network members to earn rewards for sharing their resources.
        </p>
      </div>,
    },
    {
      title: 'Environmentalist',
      content: <div>
        <h3>Coloniume is Environmentalist</h3>
        <p>Coloniume is an environmentally conscious network that aims to use all its resources efficiently. The network ensures that no unnecessary processing or hardware is used to open blockchain blocks, and only network traffic that provides useful services is rewarded. Coloniume also strives to reduce energy consumption and minimize heat production during hardware production. Additionally, the network plans to conduct research on controlling device damage in the future. By prioritizing sustainability, Coloniume hopes to minimize its impact on the environment and promote a more eco-friendly approach to technology.
        </p>
      </div>,
    },
    {
      title: 'Advantages',
      content: <div>
        <h3>Advantages</h3>
        <p>Coloniume offers numerous advantages to its users and the world at large, including:
        </p>
        <ul >
          <li>Free flow of information: Coloniume allows for unrestricted and decentralized communication, promoting the free flow of information and knowledge sharing.
          </li>
          <li>Free internet access for everyone: Coloniume provides free internet access to people who may not have had it before, reducing the digital divide and increasing access to information and resources.
          </li>
          <li>Improving the quality of life: With increased access to information and resources, Coloniume has the potential to improve people's lives by providing access to education, healthcare, and other essential services.
          </li>
          <li>Expanding Internet businesses: Coloniume's decentralized platform provides opportunities for entrepreneurs to start businesses without the high costs associated with traditional internet infrastructure.
          </li>
          <li>The prosperity of the Internet economy: With the expansion of the internet, Coloniume can stimulate the growth of the internet economy and create new jobs and opportunities.
          </li>
          <li>Free public education: Coloniume has the potential to provide free public education, enabling people to learn and grow without the barriers of cost and accessibility.
          </li>
          <li>Industrial prosperity: Coloniume's ability to share resources and reduce energy consumption can promote industrial prosperity and reduce waste.
          </li>
          <li>Launching a local network for communication in emergencies and crises: Coloniume's decentralized network can serve as a reliable means of communication during emergencies and crises.
          </li>
          <li>Reducing the energy consumption of personal computers by entering PCs into the market: Coloniume's low-cost PCs can reduce energy consumption and contribute to the overall sustainability of the technology industry.
          </li>
        </ul>
      </div>,
    },
  ];


  return (
    <div className={style.info_section} id="InfoSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ">
            <div className={style.section_content}>
              <div className={style.tab_container}>
                <div className={style.tabs_bar}>
                  {tabs.map((tab, index) => (
                    <div
                      key={tab.title}
                      className={style.tab + ' ' + (value === index ? style.active : '')}
                      onClick={() => handleChange(index)}
                    >
                      {tab.title}
                    </div>
                  ))}
                </div>
              </div>
              <div className={style.tab_content}>
                {tabs[value].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
