# MyFitnessPal Test Plan

Functional Testing:

- Login/Logout to app
- Check notification center is accessible and showing correct data
- Check user can check inbox
- Check user can compose new message
- Check user can access **Recipes** activity and can interact with displayed recipes
- Check user can access **Plans** activity
  - Can filter plans
  - Can view plan
  - Can start/try plan
- Check user can access **ME** activity
  - Can check/modify his goals
  - Add friends
  - Connects apps and devices
  - Can check his/her posts
  - Can create meal/recipe/food/cardio/strength
- Check user can access **Diary** activity
  - Can check his progress through the day
  - Can navigate through past days to check his/her activity
  - Can add food (In any meal)
  - Can add exercise
  - Can add water
  - Mark diary as completed
- Check user can access left side menu
  - (Check every menu list)

Performance Testing:

- Check device performance
  - Check app start-up time
  - Check battery time while using the app
  - Check memory consumption
  - Test app on various devices with various specs
  - Usage with other apps

- Network performance
  - Network speed (2.5G ,3G, 4G, 5G)
- API performance
  - API calls generated from APP

Security Testing:

- Check user data and credit card info is secured from brute force attack
- Check app is secured against SQL injections
- Check application is secured from DOS attacks
- Validate app only allows strong user password

# Issues (Platform: Android):

- Welcome Back screens keep appearing for users
- Notification center is not updating with new notifications