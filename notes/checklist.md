# COMPONENTS

	[ ] Theme Context
	[ ] Running Timer Context

## Landing
	[ ] Header
		[ ] Logo
		[ ] Sign In Btn(clerk but design)
	[ ] Hero
		[ ] Date
		[ ] Current time flip-clock
		[ ] Tagline & summary
		[ ] (signin) & SignUp btn
		[ ] Example Timer Card
		[ ] Example Detailed Card
		[ ] Example Timer page( or make it background!)
		[ ] Example Charts
	[ ] Footer
		[ ] Name -> portfolio
		[ ] license
		[ ] still in progress ... contact me-> email(or portfolio contact? or github)

## Dashboard
	[ ] Update Header	
		[ ] Add Category Btn (goes with modal/drawer)
			[ ] Modal/Drawer (shadcn)
				[ ]	Category Form
					[ ]	Text Input(with datalist)
					[ ] Color Picker (https://casesandberg.github.io/react-color/ twitter or circle)
					[ ] Save Btn
					[ ] Cancel Btn
		[ ] Theme DropDown
		[ ] Focus Mode Btn
		[ ] Avatar(Clerk)
		[ ] Menu Sheet (on mobile with all above) (shadcn)
	[ ] Stat Aside
		[ ] Name
		[ ] All Time Total Time
		[ ] Completed Goals
			[ ] Category Accordion
				[ ] list of completed
			[ ]	Time Accordion
				[ ] list of completed
	[ ]Category Area
		[ ] Category Card
			[ ] Name
			[ ] Total Time
			[ ] Start Btn
			[ ] Details Btn
	[ ] Detail Category Card
		[ ] Name
		[ ] Total Time
		[ ] ...(dropdown menu) shadcn
			[ ] Edit Btn(opens category modal/drawer)
			[ ] Delete Btn(confirm alert dialog) (shadcn)
			[ ] Add Goal Btn(opens Goal modal/drawer)(shadcn)
				[ ]Goal Form
					[ ] Time Frame Select Drop Down
					[ ] Time Slider
					[ ] Reoccurring Checkbox(with icon)
					[ ] Add Btn
					[ ] Cancel Btn
		[ ] Start Btn
		[ ] Running Timer
		[ ] Stop Btn
		[ ] Reset Btn
		[ ] Tracker(past 7 days) (https://npm.tremor.so/docs/visualizations/tracker)
		[ ] TimeFrame Total Time Columns Area(maybe goal placeholders will have this info instead.)
			[ ] Time in Circle(growing?)
			[ ] Label(day, week, etc)
		[ ] Minimize Icon(closes detail card)
		[ ] Goal Cards
			[ ] TimeFrame Label
			[ ] Total time for time frame
			[ ] Progress Bar
			[ ] Time to go
			[ ] Target Time
			[ ] ...(drop down menu)
				[ ] edit btn(opens goal modal/drawer)
				[ ] Delete btn(alert dialog)(shadcn)
				[ ] Archive Btn(set non reoccurring)(alert dialog)(shadcn)
				[ ] Mark Completed(alert dialog) shadcn
			[ ] Reoccurring icon(tool tip over it.)
		[ ] IF no goals(placeholders for goals)
		[ ] Add Goal Btn
	[ ] Charts Area(all rechartsjs)
		[ ] Percent Area Chart
			[ ] Title
			[ ] Legend
			[ ] Chip(for timeframes)
		[ ] Simple Tree map
			[ ] Title
			[ ] Legend
			[ ] Chip(for timeframes)
		[ ] Two Level Pie Chart
			[ ] Title
			[ ] Legend
			[ ] Chip(for timeframes)
		[ ] BubbleChart
			[ ] Title
			[ ] Legend
			[ ] Chip(for timeframes)

## Focus Mode
	[ ] Dashboard Link (replaces 'Focus Mode') in header
	[ ]Category Timer Cards
		[ ] Name
		[ ] running timer(if)
		[ ] stop btn (if)
		[ ] reset btn (if)
		[ ] start btn(if not)
		[ ] details btn(populate page? or go to dashboard)


# MODELS & Enums

	[ ] User
		[ ] id
		[ ] clerkUserId
		[ ] name
		[ ] email
		[ ] imageUrl
		[ ] @categories
		[ ] @goals
		[ ] @timelogs
	[ ] Category
		[ ] id
		[ ] name
		[ ] totalTime
		[ ] color
		[ ] @user
		[ ] @goals
		[ ] @timelogs
	[ ] Goal
		[ ] TimeFrame
		[ ] TargetTime
		[ ] Completed
		[ ] Active
		[ ] CreatedOn
		[ ] @userId
		[ ] @categoryId
	[ ] TimeLog
		[ ] id
		[ ] startTime
		[ ] endTime
		[ ] timePassed
		[ ] @user
		[ ] @category
	[ ] COLOR
		[ ] Values based with theme
	[ ] TIMEFRAME
		[ ] Day
		[ ] Week
		[ ] Month
		[ ] Season
		[ ] Year

# FUNCTIONS

## utils
	[ ] formatTime

## Server
	[ ]Categories
		[ ] get all( with goals & timelogs)
		[ ] get running timer-for context
		[ ] get category(for detailed card)
		[ ] get categories(just for timers)
		[ ] Add category
		[ ] Edit category
		[ ] Delete category
	[ ] Goals
		[ ] Get all completed goals
		[ ] Get goals by Category
		[ ] Add goal
		[ ] Edit goal
		[ ] Delete goal
	[ ] TimeLogs
		[ ] get all time logs(for all time total time)
		[ ] get timelogs by timeframe(in a cateogry)-for goals
		[ ] get timelogs for category for 7days-for tracker
		[ ] Add timelog(start)
		[ ] Update timelog(stop)
		[ ] Delete timelog( reset)
	[ ] User
		[ ] Get current user(Clerk currentUser())
		[ ] Check -> Create User(if not in db)


## Charts
	[ ] Stacked Bar Chart
		[ ] function to get days, weeks, or months for a week, month, or year, get total time for each category depending on the first set of timelines
	[ ] Bubble chart
		[ ] getting total times per time frame for one category
	[ ] Active Shape Pie chart
		[ ] Get total time for all categories per time frame(basically stacked bar chart.)