import React from "react";
import RushSchedule from "../../assets/RushSchedule.png";
// smaller box with narrow width around entire page
// image larger
// separate buttons
// custom component for events 
	// style events

const Schedule = () => {
	return (
		<div className="schedule-page">

			<h1>RUSH SCHEDULE</h1>
			<img src={RushSchedule} />
			<div>
				<button>Register</button>
				<button>Notion</button>
			</div>
      
			<div className="schedule-paragraph">
				<div className="rush-event">
					<h2>
						Interfraternal Panel | September 10th at 3:00 PM in
						VMH1524
					</h2>
					<ul>
						<li>
							A chance to listen to representatives from all four
							business fraternities and see which one aligns best
							with your interests.
						</li>
						<li>Dress Code: Presentable Casual</li>
					</ul>
				</div>
			</div>
      
		</div>
	);
};

export default Schedule;
