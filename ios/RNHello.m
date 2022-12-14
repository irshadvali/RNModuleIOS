//
//  RNHello.m
//  RNModuleIOS
//
//  Created by irshad vali on 14/12/22.
//
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
