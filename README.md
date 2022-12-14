# RNModuleIOS
Created two files as RNHello.h and RNHello.m
## IN RNHello.h file
```
#import <React/RCTBridgeModule.h>
@interface RNHello : NSObject <RCTBridgeModule>
@end

```

## In RNHello.m
 in this file , we have to write own code
 
 ```
#import <React/RCTLog.h>
#import "RNHello.h"

@implementation RNHello

// To export a module named RCTCalendarModule
RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(getDataFromJS:(NSString *)name location:(NSString *)location)
{
 RCTLogInfo(@"This is printing  %@ at %@", name, location);
}

RCT_EXPORT_METHOD(findEvent:(RCTResponseSenderBlock)callback)
{
  callback(@[@"Hello this from native IOS"]);

}
@end
 
 ```

