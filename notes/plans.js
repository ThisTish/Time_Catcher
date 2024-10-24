// ! Need to determine all the data I need to get, then pass it to components as I need them. 
// ? so i'm thinking, get all categories by userId-include timeLogs and Goals.
// *go through and mark with 'todo' the information that needs to be passed to that component
// * also determine what is client and what is server.

// ! When I go to the application for the first time, I find a welcome/landing page
	// ? Auth function to see if logged in.
	// * header
		// * logo
		// * signIn button
	// * Hero
		// * Date & Current Time in a clock
		// ? Get time, and update every second
		// * find/make flip clock
			// Flip analog clock
		// * Tagline and summary
			// * Losing track of time
				// * make custom timers, set goals, visualize results and start catching your time again to make the most of it.
		// * SignIn Btn & Sign Up Btn
	// * 3 example timer cards
	// * 1 example detailed category card
	// * charts
	// * Footer
		// * Name
		// * License
		// * portfolio
		// * Still in progress... contact for ideas or issues
	
// ! When I sign in I am taken to the dashboard page
	// ? Sign in handled by Clerk
	// ? Auth util functions to find UserId
	// * Header now has-
		// * Add Category Btn
			// * Modal/Drawer with Category form appears
				// ? size of screen
				// * Category Name input
					// * Datalist for suggestions
					// ? list of popular categories
				// * Color DropDown filled with theme colors and option for custom
					// * option for custom color(activates new input)
						// * new input is color picker
			// > Add Goal('+ Goal) triggers goal form
			// * Save Btn
				// ? Create new Category
				// ? render Detailed Category Card
			// * Cancel Btn
		// > Add Goal btn
		// * Theme drop down
			// * create themes
			// ? theme context
		// * Focus Mode Btn
			// ? timer page
		// * Pic from clerk
		// ! on mobile
			// ? size of screen
			// * Menu sheet with all of above in it
	
	//! If current Timer(if none, this detailed category area doesn't show.)
	// ! This is also what will show if category is clicked on- but no current timer displayed, and Start btn only
		// ? Current Category is retrieved( include goals and time logs )
		// ? current timer context
		// ? running timer is loaded
		// ? Detailed Category card is rendered
		// Detail Card includes:
			// *Category Name
			// * All-time total time
				// ? reduce all time logs
			// * Running timer
				// ? retrieve start time for time log, find difference, refresh every second
			// * Stop btn
				// ? Update stop time for time log
				// ? update total time
				// ? update goal times
				// ? switch button to Start Btn(and hide reset & pause)
			// * Reset btn
				// * alert to confirm
				// ? delete time log
				// ? switches Stop Btn to Start Btn( and hides reset & pause)
			// > Pause btn
			// * Current total times columns
				// ? switch case for time finding time period
				// ? reduce time logs from that time period
				// * Day
				// * Week
				// * Month
				// > Season
				// * Year
			// ! If Goals
				// ? render goals for that category
				// * Goal Card
					// * Time frame name
					// * progress area
						// * total time
							// ?(functions for total times columns)
						// * time to go
							// ? subtract total time for goal time period from target time.
							// ? if solution in negative -> mark complete -> (status bar changes in a way)
						// * target time
						// * visual display to show progress
							// ? find percentage of completed time -> apply in style
					// * reoccurring icon (grayed out if not)
					// * option dots
							// * edit
								// * Goal Form
								// ? retrieve goal data -> populate form
								// ? update new data
								// ? refresh Goal component
							// * delete
								// * Confirm delete alert/dialog(destroy all records?)
								// ? delete where goalId
								// ? refresh Category component
							// * archive/ pause tracking
								// ? change active column to false
								// ? do not recreate at end of time frame
							// * mark completed
								// * Confirm complete alert/dialog
								// > add timelog form
								// ? alter total time
								// ? change completed column to true
								// ? change styling of goal
								// ? refresh Category, Goal, and Completed Goals components
				// * Add Goal Btn
					// * Goal Modal/Drawer
						// * Goal Form
							// * Time Frame Select
							// * Time Slider
								// ? convert time to ms to store
							// * ReOccurring checkbox
								// ? mark goal as active
								// ? at end of current time frame, recreate new goal
								// ? reoccurring icon on goal card
							// * Add Btn
								// ? create Goal in database
								// ? refresh Category component
							// * Cancel Btn
			// ! if no goals
				// * <p>Set a goal now! </p> Little icon or something fun
				// * Add Goal Btn
				// Same as above Drawer -> Form
			// * option dots
				// * edit
					// * Category Drawer -> Form
					// ? retrieve category data -> populate form
					// ? update new data
					// ? refresh Category component
				// * delete
					// * Confirm delete alert/dialog(delete all records?)--maybe don't do cascade?
						// * Delete all timelogs from category checkbox
							// ? if clicked delete timelogs with that categoryId
					// ? delete where categoryId
					// ? refresh Categories Area component
				// * Add Goal
				// Same as above Drawer -> Form
				// > add sub task
				// * reset timed stats(does this mess with completed goals?)
			
				// * Bubble Chart for the week for that category
					// https://recharts.org/en-US/examples/BubbleChart
					// ? map over the last 7 days, calculate the totalTimeByDay for category, create object with day, index: 1, and value. push to data array
					// * Select for time frame(or badges)
					// ? filter based on time frame
					// ? render time logs 
					// > option to delete a timelog
			// * minimize button for the whole card.
				// ? rerender detailed category area
		
	// *Categories Area
		// ? Render all Categories from user(does not need to include goals nor timelog)
		// * Basic Category Timer Card
			// * Name
			// * Total Time
			// * Start Btn
				// ? create timelogs
				// ? get Category Details to render Detailed Category component
			// * Details Btn(populate up top with detailed category card)
				// ? get Category Details
		
	// * Charts Area(option to select time period)
		// ? filter by time frames
		
		// * Stacked Bar Chart of timelogs(recharts)
			// https://recharts.org/en-US/examples/StackedBarChart	
				// ? get categories, 
				// ? switch case of filter( so if week, map over 7 days, if month, map over weeks? year map over 12 months?)
					// ? map to get totalTimeByPeriod(switch case)
					// ? create array of day's categories and categories' totalTimes
					// ? pass color for fill/stroke
					// ? data key is going to be category.name

		// * Active shape pie chart


		// > Simple Tree map to visualize size of time spent(might be better when adding subcategories)
			// https://recharts.org/en-US/examples/SimpleTreemap
		// > Two Level Pie chart for categories in middle(split by how much time spent) outer ring how many goals completed(for when you get more than 5 goals completed?)
			// you make a pie chart and a donut chart. You put the categories data in the first array with their values. then you put the goals with their values(have to figure out how to match the category values so the completed goals add up to category values. - have to be in the same order.)
			// https://recharts.org/en-US/examples/TwoLevelPieChart
		// * Recharts-BubbleChart for displaying how much time in category in hour, day, etc
			// https://recharts.org/en-US/examples/BubbleChart

	// * Aside Stats area(Menu item in mobile. Displays as sheet in Mobile)
		// ? find screen width
		// * Your Name
		// * Total Time Caught
			// ? get and reduce all timelogs
		// * Completed Goals(split)
			// ? get goals marked complete
			// Summary
			// * Category Name
				// ? filter by category
			// * number completed
				// ? arr.length
			// * + (to show details)
				// Details
				// * Time period
					// ? filter by time frame
				// * Time period completed
			// *==========================
			// * Time Period Name
			// * number completed
			// * +
				// * Category
				// * when completed
	// * Footer stays the same


// ! When I go to Focus Mode
	// ? get categories (again?)
	// * Timers Page shows
		// * Category Timer Cards populate the screen
			// * Name
			// !IF running
				// * running timer
					// ? running timer function
				// * Stop Btn
					// ? update timelog
					// ? change to Start Btn (hide Reset Btn)
				// * Reset Btn
					// * alert to confirm
					// ? delete timelog
				// * Details Btn(Detailed Category Card populates top? folds out?)
			// !ELSE
			// * Start Btn
			// * Details Btn(Detailed Category Card populates top? folds out?)
	// * Dashboard Link in Nav
		// ? go to dashboard


// !Models
	// ? User
		// * completed goals( so they don't get messed up if goal is edited?)
	// ? Category
	// ? Goal
		// *Time frame
		// *target time
		// *userId
		// *categoryId
		// *completed
		// *active
		// *reoccurring?
		// *created on

	// ? Timelog


	// thoughts
	// todo Need way to make reoccurring- so completed goal is saved, and new one is made at the end of the time frame.

	// todo do main getCurrentTimerContext server action pass to those that need it(CategoriesArea, FocusMode, DetailedCategoryArea(show if timer running), CategoriesArea (for buttons) )
	// todo ok, so getAllCategoriesByUserId-include Goals and TimeLogs for Dashboard. Pass and filter to CategoriesArea, PersonalAside, and ChartArea(filter as Necessary).
	// todo then getACategoryById for DetailedCategoryCard(lazyLoading)
	// todo for FocusMode getAllCategoriesByUserId with just Name, Color(include getCurrentTimerContext for running timer.) - try to make CategoriesArea composable for Dashboard and FocusMode


	// > ICEBOX
		// > TimeLine Chart of time logs(options to remove time logs)

		// > Percent Area Chart for displaying where time was spent
			// https://recharts.org/en-US/examples/PercentAreaChart
			//  need data to look like 
				// const data = [{day: '10/20/2024, category.name: 2300, category.name: 1200, name: 300}, {<repeated>}]
				//  so get categories, map over them for 7 days to get total time for each day and find the percentage out of 24 hours
					//  getCategories(include timelogs where (starttime-end time within 7days) for each day)
					//  create array of day's categories and categories' totalTimes
					//  percent util function
					//  pass color for fill/stroke
					//  data key is going to be category.name
					//  look at how they connect the line ones when there is missing data in the middle. (maybe make a gradient?)
