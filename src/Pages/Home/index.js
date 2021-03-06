import React from 'react'
import DashBoardNav from '../../components/DashBoardNav';
import AboutMe from '../../components/AboutMe';
import PageHeader from '../../components/PageHeader';
import InfoCard from '../../components/InfoCard';
import CollectionsIcon from '@mui/icons-material/Collections';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import ReviewsIcon from '@mui/icons-material/Reviews';
import './style.css'

function HomePage() {
    return (
        <div className="homepage">
            <DashBoardNav />
            <PageHeader value={"Home"}/>
            <div className="homepage-body">
                <AboutMe />
                <div className="info-grid">
                    <InfoCard icon ={<CollectionsIcon />} attribute="Collections" value="1234"/>
                    <InfoCard icon ={<MonochromePhotosIcon />} attribute="Photos" value="1453"/>
                    <InfoCard icon ={<EmojiEventsIcon />} attribute="Awards" value="4245"/>
                    <InfoCard icon ={<ReviewsIcon />} attribute="Reviews" value="2456"/>
                </div>
            </div>
            
            
        </div>
    )
}

export default HomePage
