//フッターの下に人物リストを作る
var $introduction = $('<div></div>').css({
    "lineHeight": "normal"
}).appendTo('body');

//反映ボタン
var $button = $('<input type="button" value="自己紹介構築">').appendTo('body');
$button.click(function(){
    $introduction.html("terada");
    $('.user-profile-details').each(function() {
        var $profile1 = $(this);
        var $profile2 = $('<div></div>').css({
            "margin": "40px"
        });
        //名前
        var $name = $('<div></div>').css({
            "fontSize": "40px"
        }).text($profile1.children('.user-name').text());
        $name.appendTo($profile2);
        //アバター
        var $img = $profile1.children('.user-avatar').clone();
        var src = $img.attr('src');
        //console.log("---");
        //console.log(src);
        if (src.match(/gravatar/)) {
            //console.log("match");
            src = src.replace(/s=25/, "s=160");
            //console.log(src);
            $img.attr("src", src);
            $img.attr("data-src", src);
        }
        $img.attr('height', '160');
        $img.attr('width', '160');
        var $avatar = $('<div></div>');
        $avatar.append($img);
        $avatar.appendTo($profile2);
        //ソーシャル
        var $socials1 = $profile1.find('.external-profile-link');
        var $socials2 = $('<div></div>');
        $socials1.each(function() {
            var $social = $('<div></div>').css({
                "marginTop": "5px"
            });
            var $link = $(this).clone();
            $link.appendTo($social);
            $link.find("i").css({
                "fontSize": "30px"
            }).text(" " + $link.attr("data-original-title"));
            $social.appendTo($socials2);
        });
        $socials2.appendTo($profile2);

        //追加
        $profile2.appendTo($introduction);
        $('<hr>').appendTo($introduction);
    });
});
