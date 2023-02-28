(function(){
    'use strict';
    $('body').insertBefore(" <div id='video_speed' style= 'position=fixed;right:50px;top:50px;background:red'><input  id='speedrate' value=1 style='padding:10px;'></div> ");
    $('svg')[0].insertBefore(" <div class='video_speed' id='video_speed' style= 'position=fixed;right:50px;top:50px;background:red'><input  id='speedrate' value=1 style='padding:10px;'></div> ",$('svg')[0]);
    //获取B站视频资源
    var video=document.querySelector('video')==null ? document.querySelector('.bilibili-player-video bwp-video'):document.querySelector('video');
    if(video)
    {
        var speedRate=0.5;
        document.onkeydown = function(e) {
            var keyCode = e.keyCode || e.which || e.charCode;
            var ctrl_Key = e.ctrlKey ;
            //ctrl+up组合键或者+键，提高视频播放速率      上限控制在16倍速，下限控制在0.1倍速
            if((ctrl_Key && keyCode == 38)|| keyCode==107) {
                if((video.playbackRate+speedRate)<=16)
                video.playbackRate+=speedRate;
                else
                    {
                        video.playbackRate=16;
                        alert("视频播放速率已达上限");
                    }
            }
            //ctrl+down组合键或者-键，降低视频播放速率
            if((ctrl_Key && keyCode == 40)||keyCode==109) {
                if((video.playbackRate-speedRate)>=0.1)
                    video.playbackRate-=speedRate;
                else
                    {
                        video.playbackRate=0.1;
                        alert("视频播放速率已达下限");
                    }
              }

              
            e.preventDefault();
            return false;
          }
    } 
    
})();