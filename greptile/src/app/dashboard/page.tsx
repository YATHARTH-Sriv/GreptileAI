
import { Button } from '@/components/ui/button';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import React from 'react'

const projects = [
    {
      title: "Setup Code Review Bot",
      description:
        "Comprehensive code reviews of your team's PRs on GitHub or GitLab. Get started in minutes.",
      link: "https://stripe.com",
    },
    {
      title: "Start chatting with any Codebase",
      description:
        "You can chat with one or multiple codebases at once. Private and public. Just paste the repository link and start chatting.",
      link: "https://netflix.com",
    },
    {
      title: "Invite your team",
      description:
        "Make your collaborators more effective. Collaborate with your team right in Greptile and simplify your billing.",
      link: "https://google.com",
    },
    {
      title: "Install the Slack & Linear Integrations",
      description:
        "Answer technical questions where your team lives. Live, up-to-date, and always-awake.",
      link: "https://meta.com",
    },
]

function page() {
  return (
    <div className=" overflow scrollbar-hide h-screen w-screen bg-black grid grid-cols-12">

    <div id="leftcolumn" className="h-screen col-span-3 bg-black text-black  ">
      <div className='m-3 rounded-xl'>
    <Button className=' rounded-lg hover:bg-white bg-white w-full p-2 border-dotted'>+ New Chat</Button>
    </div>
    </div>
    <div id="feed" className="overflow-y-auto col-span-9 bg-gray-700 text-white scrollbar-hide">
    <div className="max-w-5xl mx-auto px-8">
       <HoverEffect items={projects} />
   </div>
    </div>

  </div>
  )
}

export default page
