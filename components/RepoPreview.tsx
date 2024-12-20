// Import
"use client";
import './styles/RepoPreview.css';

// Props
interface RepoPreviewProps {
    url: string,
    title: string,
    color: string,
    children: React.ReactNode
}

// Component
const RepoPreview = ({url, title, color, children}: RepoPreviewProps) => {

    const handleRedirect = (url: string) => {
        if (typeof window !== 'undefined'){
            window.open(url);
        }
    }

    return(

        <div className = 'default-border' id = 'RepoPreviewContainer' onClick = {() => handleRedirect(url)}>

            <div id = 'titleContainer'>
                <p style = {{color: color}}>{title}</p>
                <img src = '/images/github.svg' width = {25}></img>
            </div>

            {children}

        </div>

    )
}

// Export
export default RepoPreview;