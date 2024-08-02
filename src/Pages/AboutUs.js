import React, { useState } from "react";
import Img1 from '../Images/About/about-us-img-1.jpg';
import ContactLine from "../Components/ContactLine";
import './Styles/aboutus.css';
import './Styles/styles.css';
import { NavLink } from "react-router-dom";
const AboutUs = () =>{
    const [hovered,  setHovered] = useState('');
    
    const hoverCall =(iconId) =>{
        setHovered(iconId);
    }
    const hoverEnd =() =>{
        setHovered('');
    }
    return(
        <section className="pageBody">
            {/* Section 1 */}
            <div className=" section1 aboutSection1">
                <div className="imageHomeSection1 imageAboutSection1">
                    <img src={Img1} alt="AboutImageOne"/>
                </div>
                <div className="contentHomeSection1 section1Part1">
                    <h2 className="">Efficient <span>Staffing</span> for Unique Needs</h2>
                    <p>TM Staffing Solutions, with over a decade of expertise, offers comprehensive personnel management services. We help organizations address unique workplace challenges by providing tailored solutions that meet your specific needs, ensuring time and cost savings.</p>
                </div>
            </div>
            {/* Section 2 */}
            <div className="sectionsize aboutSection2">
                <h2>Our values underpin <br/>everything we do</h2>

                <div className="sectionsize cardsBoard" style={{justifyContent: 'space-around' }}>
                    <div className="cardSection cs1" >
                        <div className="cardBody" onMouseOver={() => {hoverCall('svg1')}} onMouseLeave={hoverEnd} >
                            <svg id="svg1 Layer_1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill={hovered === 'svg1' ? '#f5f5f5' : '#f10000'} data-name="Layer 1">
                                <path d="m51.263 132.626c-.903-.847-1.216-2.062-.833-3.24.382-1.178 1.35-1.978 2.578-2.132l23.756-2.986 10.181-21.671c.526-1.12 1.586-1.793 2.824-1.793s2.298.673 2.824 1.793l10.181 21.671 23.756 2.986c1.228.154 2.196.954 2.578 2.132.383 1.177.07 2.393-.833 3.24l-17.464 16.379 4.501 23.516c.233 1.216-.229 2.383-1.231 3.111-1.001.728-2.254.806-3.339.209l-20.974-11.547-20.974 11.547c-1.085.597-2.337.519-3.339-.209s-1.464-1.895-1.23-3.111l4.5-23.516-17.464-16.379zm349.924 16.379-4.5 23.516c-.233 1.216.229 2.383 1.231 3.111 1.001.728 2.254.806 3.339.209l20.974-11.547 20.974 11.547c1.085.597 2.338.519 3.339-.209 1.002-.728 1.464-1.895 1.231-3.111l-4.501-23.516 17.464-16.379c.903-.847 1.216-2.062.833-3.24-.382-1.178-1.35-1.978-2.578-2.132l-23.756-2.986-10.181-21.671c-.526-1.12-1.586-1.793-2.824-1.793s-2.298.673-2.824 1.793l-10.181 21.671-23.756 2.986c-1.228.154-2.196.954-2.578 2.132-.383 1.177-.07 2.393.833 3.24l17.464 16.379zm-239.714 42.279c-6.447-10.855-9.473-22.277-9.473-34.898v-101.992c23.655-6.037 67.658-18.965 104-41.655 36.342 22.69 80.345 35.618 104 41.655v101.993c0 12.621-3.027 24.043-9.474 34.898-17.662 29.74-61.665 53.152-94.526 73.019-32.862-19.867-76.864-43.28-94.527-73.019zm8.658-34.875c0 9.52 2.198 17.66 6.917 25.618 13.482 22.693 50.741 44.614 75.4 59.113 1.099.641 2.318.969 3.552.969s2.448-.328 3.547-.969c24.664-14.499 61.923-36.42 75.4-59.113 4.724-7.958 6.922-16.099 6.922-25.618v-82.852c0-3.109-2.049-5.837-5.032-6.719-29.446-8.628-55.508-19.107-77.468-31.147-2.102-1.152-4.642-1.152-6.729 0-21.97 12.04-48.032 22.519-77.482 31.147-2.979.882-5.027 3.61-5.027 6.719zm18.957 18.47c-3.427-5.779-4.96-11.472-4.96-18.47v-77.641c26.91-8.17 51.039-17.911 71.872-28.988 20.828 11.077 44.971 20.818 71.867 28.988v77.641c0 6.998-1.528 12.691-4.955 18.47-11.033 18.581-44.691 39.009-66.912 52.1-22.211-13.091-55.879-33.518-66.912-52.1zm16.67-37.937 21.967 38.049c1.537 2.661 3.989 4.3 7.036 4.701s5.84-.547 8.013-2.72l61.793-61.793c4.109-4.109 4.109-10.834 0-14.943s-10.833-4.109-14.943 0l-51.134 51.135-14.43-24.995c-2.906-5.033-9.401-6.773-14.434-3.868-5.033 2.906-6.773 9.401-3.867 14.434zm-97.668 112.78-24.026-13.367c-.587-.328-1.185-.49-1.777-.49-.753 0-1.502.269-2.185.808-35.607 28.086-55.477 77.673-47.257 117.91.258 1.276.915 2.072 2.11 2.584l18.751 7.962c.57-45.943 19.37-85.818 54.384-115.406zm287.404 13.377-11.23 6.246c-19.967 11.106-42.217 13.12-64.354 5.82-18.977-6.25-38.923-2.6-60.995 11.16l-63.907 39.854c-3.252 2.024-3.397 4.108-3.44 4.791-.167 2.498 1.394 5.566 3.898 7.634 13.626 11.289 24.215 6.95 43.305-2.374 11.995-5.863 25.599-12.506 41.593-12.597 17.442 0 29.962 6.848 44.565 15.294l61.27 35.37c.226.135.447.275.656.425 4.013 2.892 6.542 5.601 8.285 8.146l47.403-21.93c-1.532-39.154-17.348-72.039-47.048-97.839zm-128.068 189.565c-2.713-1.572-5.906-1.981-8.991-1.152-3.074.823-5.631 2.773-7.192 5.491l-14.153 24.5c-3.246 5.658-1.303 12.904 4.344 16.172 5.664 3.268 12.926 1.319 16.199-4.339l14.126-24.484c3.273-5.658 1.33-12.92-4.334-16.188zm110.594-65.027-60.915-35.176c-11.801-6.826-22.939-13.249-36.645-13.195-12.441.076-23.822 5.637-34.831 11.015-17.863 8.727-38.099 18.611-60.134.366-6.379-5.281-10.035-13.222-9.529-20.721.469-6.934 4.291-12.979 10.767-17.017l48.339-30.136c-13.472-6.128-25.888-5.051-40.812-3.759-20.237 1.755-43.17 3.742-72.866-12.958l-5.027-2.828c-29.894 26.028-45.672 59.244-46.944 98.818l47.836 24.655c.808.414 1.519.969 2.143 1.631l10.581 11.381 5.504-9.54c3.666-6.331 9.593-10.869 16.7-12.775 7.112-1.905 14.519-.942 20.85 2.719 6.342 3.655 10.88 9.588 12.791 16.694.022.108.054.221.086.334 6.88-1.938 14.519-1.217 21.19 2.638 6.681 3.854 11.122 10.105 12.888 17.044.113-.027.226-.06.334-.092 7.106-1.906 14.508-.942 20.856 2.719 6.664 3.854 11.122 10.105 12.877 17.044.113-.032.221-.059.334-.091 7.117-1.906 14.519-.942 20.85 2.718 13.125 7.575 17.642 24.42 10.067 37.545l-6.476 11.212 4.565 2.565c9.017 5.206 14.821 2.519 17.265-1.718 2.25-3.876 1.949-9.615-4.005-13.044l-1.685-.98c-3.741-2.159-5.028-6.939-2.864-10.681 2.159-3.736 6.939-5.018 10.681-2.859l12.91 7.451c2.487 1.443 5.415 1.82 8.231 1.06 2.816-.753 5.157-2.541 6.6-5.039 1.443-2.487 1.809-5.416 1.061-8.232-.759-2.826-2.547-5.168-5.034-6.605l-9.26-5.346c-3.747-2.159-5.018-6.939-2.859-10.681 2.154-3.742 6.934-5.023 10.675-2.864l15.279 8.824c5.766 3.327 13.168 1.346 16.495-4.42 3.308-5.723 1.369-13.052-4.293-16.419l-9.128-5.271c-3.742-2.159-5.018-6.939-2.864-10.681 2.159-3.736 6.939-5.017 10.681-2.858l15.02 8.667c2.773 1.605 6.024 2.019 9.157 1.185 3.128-.84 5.733-2.826 7.327-5.604 1.507-2.606 1.97-5.798 1.265-8.807-1.238-3.198-2.046-4.964-6.035-7.887zm53.883-150.964c-1.206-.953-2.611-1.066-3.968-.318l-24.021 13.362c35.036 29.631 53.824 69.517 54.368 115.412l18.767-7.962c1.184-.512 1.83-1.308 2.099-2.584 8.237-40.236-11.639-89.829-47.246-117.91zm-232.616 176.649c-5.517-3.179-12.689-1.364-16.022 4.06l-23.084 39.972c-3.257 5.658-1.319 12.926 4.344 16.193 5.664 3.262 12.926 1.319 16.183-4.344 3.679-6.372 22.923-39.478 22.923-39.703 3.262-5.658 1.319-12.91-4.344-16.177zm-28.571-12.463c-.818-3.074-2.772-5.631-5.496-7.203-2.713-1.572-5.911-1.981-8.98-1.152-3.085.824-5.642 2.772-7.203 5.491l-14.142 24.484c-1.572 2.724-1.987 5.911-1.158 8.985.824 3.074 2.778 5.631 5.491 7.203 5.571 3.215 12.69 1.381 16.031-4.066l14.305-24.768c1.561-2.719 1.975-5.906 1.152-8.974zm62.643 32.134c-5.582-3.221-12.712-1.373-16.05 4.098l-19.22 33.299c-3.022 5.612-1.049 12.674 4.514 15.884 2.713 1.567 5.895 1.976 8.98 1.152 3.079-.823 5.642-2.773 7.203-5.491 6.299-10.921 12.606-21.838 18.907-32.758 3.262-5.658 1.319-12.915-4.334-16.183z"/>
                            </svg>
                            <h4>Building Trust Through Exceptional Recruitment</h4>
                            <p>We excel in delivering top-tier talent that meets your specific needs. With over a decade of experience, we provide reliable and personalized staffing solutions.</p>
                        </div>
                    </div>
                    
                    <div className="cardSection cs2">
                        <div className="cardBody" onMouseOver={() => {hoverCall('svg2')}} onMouseLeave={hoverEnd} >
                            <svg id="svg2 Layer_1" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill={hovered === 'svg2' ? '#f5f5f5' : '#f10000'}>
                                <g><path d="m48.65 31.26c8.46 0 15.35-6.89 15.35-15.35s-6.89-15.35-15.35-15.35-15.35 6.89-15.35 15.35 6.89 15.35 15.35 15.35zm0-28.76c7.39 0 13.41 6.02 13.41 13.41s-6.02 13.41-13.41 13.41-13.41-6.02-13.41-13.41 6.02-13.41 13.41-13.41z"/><path d="m44.85 21.83c.19.19.44.28.69.28s.5-.09.69-.28l10.46-10.46c.38-.38.38-.99 0-1.37s-.99-.38-1.37 0l-9.78 9.78-3.55-3.55c-.38-.38-.99-.38-1.37 0s-.38.99 0 1.37z"/><path d="m15.35.56c-8.46 0-15.35 6.89-15.35 15.35 0 4.15 1.66 7.91 4.34 10.67.02.02.03.04.05.06 2.79 2.85 6.67 4.62 10.96 4.62 4.26 0 8.11-1.74 10.9-4.55 0 0 0 0 0-.01 2.75-2.77 4.45-6.59 4.45-10.79 0-8.46-6.89-15.35-15.35-15.35zm0 28.76c-3.55 0-6.78-1.4-9.18-3.67.24-1.26.86-2.99 2.47-3.47 1.62-.49 3.38-1.43 4.55-2.11.66.44 1.39.68 2.16.68s1.5-.24 2.16-.68c1.07.62 2.88 1.6 4.56 2.11 1.62.48 2.23 2.22 2.46 3.48-2.41 2.26-5.63 3.66-9.18 3.66zm-3.34-18.16c-.04-.79.21-1.48.7-1.99.54-.57 1.33-.88 2.23-.88h.82c.89 0 1.68.31 2.23.88.49.52.74 1.21.7 2l-.04 1.13c-.02.45.29.86.73.97.01 0 .02 0 .03.01.01.07.03.21-.02.45-.11.56-.39 1.03-.53 1.17-.32.1-.57.36-.65.7-.47 1.93-1.61 3.23-2.84 3.23s-2.37-1.3-2.84-3.23c-.08-.33-.33-.59-.65-.69-.14-.14-.43-.62-.53-1.17-.05-.24-.04-.38-.02-.45h.02c.44-.11.75-.52.73-.98zm14.06 12.78c-.51-1.47-1.49-3.03-3.44-3.61-1.3-.4-2.71-1.12-3.71-1.68.43-.61.79-1.33 1.04-2.15.77-.56 1.2-1.73 1.33-2.4.22-1.15-.12-1.94-.68-2.37l.02-.48c.06-1.31-.38-2.52-1.24-3.42-.91-.95-2.2-1.48-3.63-1.48h-.82c-1.43 0-2.72.53-3.63 1.48-.86.9-1.3 2.11-1.24 3.41l.02.49c-.55.43-.9 1.22-.68 2.37.15.76.6 1.86 1.32 2.39.25.82.61 1.54 1.04 2.16-1.05.59-2.45 1.3-3.7 1.68-1.61.48-2.8 1.73-3.45 3.6-1.68-2.24-2.68-5.01-2.68-8.02 0-7.4 6.02-13.41 13.41-13.41s13.41 6.02 13.41 13.41c0 3.01-1.01 5.78-2.69 8.03z"/><path d="m15.35 32.74c-8.46 0-15.35 6.89-15.35 15.35 0 4.15 1.66 7.91 4.34 10.68.02.02.03.04.05.06 2.79 2.85 6.67 4.62 10.96 4.62 4.26 0 8.11-1.74 10.9-4.55 0 0 0 0 0-.01 2.75-2.77 4.45-6.59 4.45-10.79 0-8.47-6.89-15.36-15.35-15.36zm0 28.76c-3.55 0-6.78-1.4-9.18-3.67.24-1.26.86-2.99 2.47-3.47 1.62-.49 3.38-1.43 4.55-2.11.66.44 1.39.68 2.16.68s1.5-.24 2.16-.68c1.07.62 2.88 1.6 4.56 2.11 1.62.48 2.23 2.22 2.46 3.48-2.41 2.26-5.63 3.66-9.18 3.66zm-3.34-18.16c-.04-.79.21-1.48.7-1.99.54-.57 1.33-.88 2.23-.88h.82c.89 0 1.68.31 2.23.88.49.52.74 1.21.7 2l-.04 1.13c-.02.46.29.86.73.97.01 0 .02 0 .03.01.01.07.03.21-.02.45-.11.56-.39 1.03-.53 1.17-.32.1-.57.36-.65.7-.49 1.93-1.64 3.22-2.86 3.22s-2.37-1.3-2.84-3.23c-.08-.33-.33-.59-.65-.69-.14-.14-.43-.62-.53-1.17-.05-.24-.04-.38-.02-.45h.02c.44-.11.75-.52.73-.98zm14.06 12.78c-.51-1.47-1.49-3.03-3.44-3.61-1.3-.4-2.71-1.12-3.71-1.68.43-.61.79-1.33 1.04-2.15.78-.56 1.2-1.73 1.33-2.4.22-1.15-.12-1.94-.68-2.37l.02-.48c.06-1.31-.38-2.52-1.24-3.42-.91-.95-2.2-1.48-3.63-1.48h-.82c-1.43 0-2.72.53-3.63 1.48-.86.9-1.3 2.11-1.24 3.41l.02.49c-.55.43-.9 1.22-.68 2.37.15.76.6 1.86 1.32 2.39.25.82.61 1.54 1.04 2.16-1.06.59-2.45 1.3-3.7 1.68-1.61.48-2.8 1.73-3.45 3.6-1.68-2.24-2.68-5.01-2.68-8.02 0-7.39 6.02-13.41 13.41-13.41s13.41 6.02 13.41 13.41c0 3.01-1.01 5.79-2.69 8.03z"/><path d="m48.65 32.74c-8.46 0-15.35 6.89-15.35 15.35 0 4.15 1.66 7.91 4.34 10.67.02.02.03.04.05.06 2.79 2.85 6.67 4.62 10.96 4.62 4.26 0 8.11-1.74 10.9-4.55 0 0 0 0 .01-.01 2.74-2.77 4.44-6.59 4.44-10.79 0-8.46-6.89-15.35-15.35-15.35zm0 28.76c-3.56 0-6.78-1.4-9.19-3.67.24-1.26.87-2.99 2.47-3.47 1.62-.49 3.38-1.43 4.55-2.11.66.44 1.39.68 2.16.68s1.5-.24 2.16-.68c1.07.62 2.88 1.6 4.56 2.11 1.62.48 2.23 2.22 2.46 3.48-2.4 2.26-5.62 3.66-9.17 3.66zm-3.34-18.16c-.04-.79.21-1.48.7-1.99.54-.57 1.33-.88 2.23-.88h.82c.89 0 1.68.31 2.23.88.5.52.74 1.21.7 2l-.04 1.13c-.02.46.29.86.73.97.01 0 .02 0 .03.01.01.07.03.21-.02.45-.11.56-.39 1.04-.54 1.17-.32.1-.57.36-.65.7-.48 1.93-1.62 3.22-2.85 3.22s-2.37-1.3-2.84-3.23c-.08-.33-.33-.59-.65-.69-.14-.14-.43-.62-.53-1.17-.05-.24-.04-.38-.02-.45.01 0 .02 0 .03-.01.44-.11.74-.52.73-.97zm14.06 12.78c-.51-1.48-1.49-3.03-3.44-3.61-1.3-.4-2.71-1.12-3.71-1.68.43-.61.79-1.33 1.04-2.15.78-.56 1.2-1.73 1.33-2.4.22-1.15-.12-1.94-.68-2.37l.02-.48c.06-1.31-.38-2.52-1.24-3.42-.91-.95-2.2-1.48-3.63-1.48h-.82c-1.43 0-2.72.53-3.63 1.48-.86.9-1.3 2.11-1.24 3.41l.02.49c-.55.43-.9 1.22-.68 2.37.15.76.6 1.86 1.32 2.39.25.82.61 1.54 1.04 2.16-1.06.59-2.45 1.3-3.71 1.68-1.61.48-2.8 1.73-3.45 3.6-1.68-2.24-2.69-5.01-2.69-8.02 0-7.39 6.02-13.41 13.41-13.41s13.41 6.02 13.41 13.41c.02 3.01-.99 5.79-2.67 8.03z"/></g>
                            </svg>
                            <h4>Autonomy in Candidate Assessment and Selection</h4>
                            <p>Delve into our autonomous candidate assessment and selection processes, where recruiters have the autonomy to evaluate candidates thoroughly and identify the best fit for each role.</p>
                        </div>
                    </div>

                    <div className="cardSection cs3">
                        <div className="cardBody" onMouseOver={() => {hoverCall('svg3')}} onMouseLeave={hoverEnd} >
                            <svg id="svg3 _x33_0" enable-background="new 0 0 64 64"  viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg" fill={hovered === 'svg3' ? '#f5f5f5' : '#f10000'}>
                                <g><path d="m17 23c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3h2c0-.551.449-1 1-1z"/><path d="m25 23c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3h2c0-.551.449-1 1-1z"/><path d="m26 27v-1h-10v1c0 2.757 2.243 5 5 5s5-2.243 5-5zm-7.829 1h5.657c-.413 1.164-1.525 2-2.829 2s-2.415-.836-2.828-2z"/><path d="m59 50h4.869l-5.869-8.803-5.869 8.803h4.869v11h-10v-4h4.869l-5.869-8.803-5.869 8.803h4.869v4h-10v-13h4.185c3.983 0 7.773-1.72 10.396-4.718 2.205-2.518 3.419-5.749 3.419-9.097v-4.051c5.921-2.1 10-7.799 10-14.134 0-8.271-6.729-15-15-15-4.915 0-9.359 2.339-12.13 6.173-.362-1.251-1.505-2.173-2.87-2.173h-14.425c-6.934 0-12.575 5.641-12.575 12.575 0 1.027.126 2.053.375 3.05l.482 1.93c-.528.678-.857 1.52-.857 2.445 0 2.206 1.794 4 4 4h.764c.962 2.452 2.771 4.478 5.075 5.708l-.689 3.442-6.148 1.23c-2.292.458-4.36 1.717-5.821 3.542-1.406 1.759-2.181 3.967-2.181 6.22v13.858h62v-2h-4zm-1-5.197 2.131 3.197h-4.263zm-12 7 2.131 3.197h-4.263zm2.077-9.837c-2.244 2.563-5.485 4.034-8.892 4.034h-6.185v15h-9.586l2.663-2.663-2.047-11.264.36-1.081 2.012 1.609 3.257-7.601h9.105c.962 0 1.927-.228 2.789-.658 2.126-1.063 3.447-3.2 3.447-5.578v-3.764h6v4.185c0 2.863-1.038 5.627-2.923 7.781zm-15.049-25.302c.078 1.728.453 3.4 1.088 4.956-.615-.387-1.337-.62-2.116-.62v-3.522c.364-.244.704-.521 1.028-.814zm-1.028 8.336v-2c1.103 0 2 .897 2 2s-.897 2-2 2h-.191c.12-.65.191-1.316.191-2zm-.764 4h.764c2.206 0 4-1.794 4-4 0-.013-.004-.025-.004-.039 1.744 2.339 4.164 4.166 7.004 5.172v3.63c0 1.615-.897 3.067-2.341 3.789-.586.294-1.241.448-1.895.448h-11.944l-.659-3.292c2.304-1.23 4.113-3.256 5.075-5.708zm13.178-1-.536-.536c-.558-.558-.878-1.331-.878-2.121v-2.343c0-.551.449-1 1-1h2c.551 0 1 .449 1 1s-.449 1-1 1h-1v2h1c.438 0 .851-.099 1.227-.269l.115.058c.276.138.585.211.894.211h1.764c.352 0 .686-.072 1-.184v2.184zm.586-12c0-1.654 1.346-3 3-3s3 1.346 3 3c0 .759-.298 1.469-.805 2.02-.066-.005-.128-.02-.195-.02h-3c-.36 0-.701.074-1.021.191-.611-.563-.979-1.342-.979-2.191zm1.641 4.073c.112-.044.232-.073.359-.073h3c.551 0 1 .449 1 1v2c0 .551-.449 1-1 1h-1.184c.112-.314.184-.648.184-1 0-1.434-1.012-2.632-2.359-2.927zm6.349.829c-.026-.799-.361-1.521-.896-2.044.581-.83.906-1.82.906-2.858 0-2.757-2.243-5-5-5s-5 2.243-5 5c0 1.326.521 2.565 1.424 3.488-.096.162-.176.333-.24.512h-.184c-.527 0-1.016.149-1.447.389-1.004-1.24-1.553-2.767-1.553-4.389 0-3.86 3.14-7 7-7s7 3.14 7 7c0 1.851-.743 3.608-2.01 4.902zm-26.713 19.098h1.207l-1.885 4.398-2.851-2.281zm-3.552 4.661-.446 1.339h-2.559l-.446-1.339 1.726-1.38zm-2.89 3.339h2.331l1.757 9.663-2.923 2.923-2.922-2.923zm28.165-45c7.168 0 13 5.832 13 13 0 5.25-3.232 9.997-8 11.994v-4.534c2.474-1.663 4-4.46 4-7.46 0-4.962-4.038-9-9-9s-9 4.038-9 9c0 2.201.784 4.268 2.214 5.904-.134.341-.214.708-.214 1.096v2.343c0 .635.126 1.249.35 1.823-3.849-2.311-6.35-6.546-6.35-11.166 0-.786.073-1.57.212-2.336.341-.762.576-1.579.694-2.435 1.973-5.001 6.712-8.229 12.094-8.229zm-38 24c-1.103 0-2-.897-2-2s.897-2 2-2v2c0 .684.071 1.35.191 2zm0-6.169v.169c-.495 0-.964.102-1.402.267l-.282-1.127c-.21-.839-.316-1.702-.316-2.565 0-5.831 4.744-10.575 10.575-10.575h14.425c.551 0 1 .449 1 1v2c0 3.86-3.14 7-7 7h-8.513c-1.371 0-2.487-1.116-2.487-2.487 0-1.072.684-2.021 1.7-2.359l.616-.205-.632-1.897-.616.205c-1.835.611-3.068 2.322-3.068 4.256 0 .168.032.328.05.491l-1.137.682c-1.797 1.078-2.913 3.05-2.913 5.145zm2 4.169v-4.169c0-1.397.744-2.711 1.942-3.43l.778-.467c.8 1.239 2.186 2.066 3.767 2.066h8.513c1.053 0 2.06-.191 3-.525v6.525c0 4.962-4.038 9-9 9s-9-4.038-9-9zm9 11c1.142 0 2.244-.176 3.28-.5l.601 3.005-3.881 2.329-3.881-2.329.601-3.005c1.036.324 2.138.5 3.28.5zm-5.183 4.056 3.436 2.061-2.851 2.281-1.76-4.107zm-12.817 9.086c0-1.8.619-3.565 1.743-4.97 1.167-1.459 2.819-2.465 4.652-2.831l3.242-.649 2.961 6.909 2.012-1.609.36 1.081-2.048 11.264 2.664 2.663h-8.586v-9h-2v9h-5z"/></g>
                            </svg>
                            <h4>Fostering Clear Communication and Confidence</h4>
                            <p>Maintaining open and honest communication with candidates throughout the recruitment process, ensuring clarity and building trust.</p>
                        </div>
                    </div>
                
                </div>

            </div>
            {/* Contact Line */}
            <ContactLine />
            {/* Section 3 */}
            <div className="sectionsize aboutSection3">
                <h5 className="helpLine">Discover the ways we can help you thrive</h5>
                <h2>Reimagining Recruitment for <br/> Optimal Results</h2>
                <p>Discover innovative recruitment strategies designed to deliver the best candidates efficiently and effectively, ensuring your organization achieves optimal results with every hire</p>
                <NavLink to="/contact-us" className="getInTouchBtn"> Get in touch</NavLink>

            </div>


        </section>
    );
}

export default AboutUs;