# Crash reproduction with android PiP

## Reproduction steps

Open app

- See the video playing normally
- Go background
  - Assert PiP Android work normally
- Go foreground
- Go background
  - Assert PiP Android work normally
- Go foreground
- Hide Video
- Show video
- Go background
  - Assert App crash

## Stacktrace:

```
E AndroidRuntime: FATAL EXCEPTION: main
E AndroidRuntime: Process: com.pictureinpictureandroidcrashissue, PID: 28046
E AndroidRuntime: java.lang.NullPointerException: Attempt to invoke virtual method 'void android.view.ViewGroup.removeView(android.view.View)' on a null object reference
E AndroidRuntime:        at com.brentvatne.exoplayer.ReactExoplayerView.setIsInPictureInPicture(ReactExoplayerView.java:2143)
E AndroidRuntime:        at com.brentvatne.exoplayer.ReactExoplayerFragment.onPictureInPictureModeChanged(ReactExoplayerFragment.kt:35)
E AndroidRuntime:        at androidx.fragment.app.Fragment.performPictureInPictureModeChanged(Fragment.java:3072)
E AndroidRuntime:        at androidx.fragment.app.FragmentManager.dispatchPictureInPictureModeChanged(FragmentManager.java:3152)
E AndroidRuntime:        at androidx.fragment.app.FragmentController.dispatchPictureInPictureModeChanged(FragmentController.java:356)
E AndroidRuntime:        at androidx.fragment.app.FragmentActivity.onPictureInPictureModeChanged(FragmentActivity.java:251)
E AndroidRuntime:        at android.app.Activity.onPictureInPictureModeChanged(Activity.java:2979)
E AndroidRuntime:        at androidx.activity.ComponentActivity.onPictureInPictureModeChanged(ComponentActivity.java:1064)
E AndroidRuntime:        at android.app.Activity.dispatchPictureInPictureModeChanged(Activity.java:9320)
E AndroidRuntime:        at android.app.ActivityThread.handleWindowingModeChangeIfNeeded(ActivityThread.java:6799)
E AndroidRuntime:        at android.app.ActivityThread.performActivityConfigurationChanged(ActivityThread.java:6599)
E AndroidRuntime:        at android.app.ActivityThread.performConfigurationChangedForActivity(ActivityThread.java:6574)
E AndroidRuntime:        at android.app.ActivityThread.handleActivityConfigurationChanged(ActivityThread.java:6966)
E AndroidRuntime:        at android.app.ActivityThread$ActivityClientRecord$1.onConfigurationChanged(ActivityThread.java:764)
E AndroidRuntime:        at android.view.ViewRootImpl.performConfigurationChange(ViewRootImpl.java:6938)
E AndroidRuntime:        at android.view.ViewRootImpl.handleResized(ViewRootImpl.java:2500)
E AndroidRuntime:        at android.view.ViewRootImpl.-$$Nest$mhandleResized(Unknown Source:0)
E AndroidRuntime:        at android.view.ViewRootImpl$ViewRootHandler.handleMessageImpl(ViewRootImpl.java:7197)
E AndroidRuntime:        at android.view.ViewRootImpl$ViewRootHandler.handleMessage(ViewRootImpl.java:7166)
E AndroidRuntime:        at android.os.Handler.dispatchMessage(Handler.java:106)
E AndroidRuntime:        at android.os.Looper.loopOnce(Looper.java:230)
E AndroidRuntime:        at android.os.Looper.loop(Looper.java:319)
E AndroidRuntime:        at android.app.ActivityThread.main(ActivityThread.java:8919)
E AndroidRuntime:        at java.lang.reflect.Method.invoke(Native Method)
E AndroidRuntime:        at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:578)
E AndroidRuntime:        at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:1103)
```
