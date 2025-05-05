import Icon from "@/components/icon";

import { NextComponentType } from "next";

interface Props {
  name: string;
  children: React.ReactNode;
  img: string;
  price?: string;
}

const Gem = ({ children }: Props) => (
  <div className="w-72 h-[30rem]  flex flex-col rounded-lg shadow-lg  overflow-clip pb-7">
    <div className="min-h-[15rem] bg-blue-200 grid justify-items-center">
      {/* <Image src={`/images/gems/${img}`} layout="fill" alt={name} /> */}
      <Icon className="m-auto" />
    </div>
    <div className="flex flex-col w-10/12 mx-auto h-full pt-[1rem]">
      <p className="text-slate-700 montserrat text-[1.1rem]">{children}</p>
      <span className="mt-auto font-semibold dm-serif cursor-pointer text-right text-[1.4rem]">
        {/* {price} */}
        RS. 99%
      </span>
    </div>
  </div>
);

const Projects: NextComponentType = () => (
  <div className="flex flex-col py-20 w-10/12 mx-auto" id="work">
    <div className="flex flex-wrap mt-10 justify-evenly gap-y-16">
      <Gem
        name="Kithulgodaranya"
        img="kithulgodaranya.png"
        price="kithulgodaranya.github.io"
      >
        A website made for a temple located in Sri Lanka
      </Gem>
      <Gem name="Insta Unfollower" img="insta.png">
        Returns the accounts that doesnt follow back the given account as json
      </Gem>
      <Gem
        name="Technicolor"
        img="technicolor.png"
        price="technicolor.netlify.app"
      >
        The Website for an annual school compition. this project was made alive
        with help of the fellow school students and an equal credit goes to them
      </Gem>
      <Gem name="Moddy" img="moddy.png">
        Moderation Discord bot for a private discord server made to fullfil
        specific requirements (mostly developer requirements)
      </Gem>
      <Gem name="Asphalt Gaming machine" img="asphalt.png">
        This was a project with my friend where we implemented a gaming machine
        for asphalt 8 with arduino and pyfirmata
      </Gem>
      <Gem name="~/.dotfiles" img="dotfiles.png">
        These are my dotfiles for linux system. I frequently configure them to
        customize my system
      </Gem>
      <Gem name="Google Search" img="google.png">
        A script made with python and beautiful soup to scrape google to find
        links and answers for queries prompted programatically (this was
      </Gem>
      <Gem name="Tic-Tac-Toe" img="tictac.png">
        A simple game made with python and tkinter that u can play with an
        opponent
      </Gem>
      <Gem name="Reverse Shell" img="reverse-shell.png">
        A simple reverse shell script that establishes a client server
        connection via sockets and allows commands to execute on client
      </Gem>
    </div>
  </div>
);

export default Projects;
