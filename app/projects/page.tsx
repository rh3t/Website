// Import
import type { Metadata } from 'next';
import Repository from '@/components/Repository';
import { toLynkNest, toMocha, toWinScripts } from '@/logic/ButtonLogic';

// Meta
export const metadata: Metadata = {
    title: 'projects | rh3t.dev'
}

// Component
export default function ProjectsPage(){
    return(

        <div className = 'fade-in'>

            <p style = {{textAlign: 'center', fontSize: 40, marginTop: 0}}>
                Featured Projects
            </p>

            <div style = {{display: 'flex', gap: '25px', justifyContent: 'center'}}>

                <Repository title = 'WinScripts' color = '#007edf' func = {toWinScripts}>
                    WinScripts is a collection of batch files that run a variety of scripts that help assist you install various applications, improve performance, and more.
                </Repository>

                <Repository title = 'Mocha' color = '#ffbb5f' func = {toMocha}>
                    Mocha is a text based operating system built with the Python programming language. Mocha was created because i felt like it, even though it serves almost no utilitarian use.
                </Repository>

            </div>

            <div style = {{display: 'flex', gap: '25px', justifyContent: 'center', marginTop: '25px'}}>

                <Repository title = 'Lynknest' color = '#4bbc60' func = {toLynkNest}>
                    Lynknest is a bulk link sharing tool that can be used for sharing a series of links with the world. It features importing and exporting links as files, so you can store them whenever you need them.
                </Repository>

                <Repository title = 'CottenCandy_1 Archive' color = '#bd5bdf' func = {toLynkNest}>
                    This repository holds a variety of projects by CottenCandy_1 on Scratch. This is more of a gag and a running joke, then an actual project.
                </Repository>

            </div>

        </div>

    )
}