##Dashboard: KesriTalks
Dashboard is an important part of most of the web applications so there is the static dashboard of my YouTube channel 'kesriTalks'. Through this project, I learned new libraries of reactjs used for graphs and charts and revised old concepts.

- [ ] useState hook: change the state of function ex- expanding card, active sidebar content
- [ ] Map method: calling array of object- reusability 
- [ ] Icon scout: for various icon on dashboard
- [ ]  React Apex chart: for designing beautiful charts  Syntax:  <Chart options={data.options} series={data.series} type='area'/>
- [ ] Framer motion: package contains ‘Animated share layout’ used for smooth transition between the components
- [ ] Animated share layout :for expanding and compact of card
- [ ] <CircularProgressbar> library for circular graph
- [ ] Material ui table- for designing table
- [ ] Responsive css3 designs
- [ ] for sidebar for mobile view  <div className="bars" style={expanded?{left: '50%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
     variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >

#Points to note
Divide page into grids

1. Unique layoutId: Added layoutId prop to the motion.div elements to help AnimateSharedLayout manage animations correctly.
2. Import motion from framer-motion: Ensured motion is imported from framer-motion to utilize the layoutId feature.
3. Total feature of framer motion library to close and open side bar


