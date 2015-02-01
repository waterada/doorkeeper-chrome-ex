var url = location.href;

//画面上部にボタンを作る
if (url.match(/tickets/)) {
    $('<input type="button" value="自己紹介構築">').prependTo('body').click(function() {
        var names = [];
        $('#checked_in').find('.user-name').each(function () {
            var $name = $(this);
            var $clone = $name.clone();
            $clone.find('ruby').children().remove(); //ルビを撤去
            var name = $clone.text();
            name = name.replace(/^\s+/,'').replace(/\s+$/,'');
            names.push(name);
        });
        var group = url.replace(/^.+\/groups\//, '').replace(/\/events\/.+$/, '');
        location.href = 'http://' + group + '.doorkeeper.jp/members#' + encodeURIComponent(names.join("\n"));
    });
}

//表示する人を絞る
if (url.match(/members/)) {
    //ヘッダーの上に人物リストを作る
    var $introduction = $('<div></div>').css({
        "lineHeight": "normal"
    }).prependTo('body');
    //反映ボタン
    var $button = $('<input type="button" value="自己紹介構築">').prependTo('body');
    $button.click(function(){
        var members = []; //参加者の情報
        var names = decodeURIComponent(location.hash).replace(/^#/,'').split("\n");
        console.log(names);
        $('.user-profile-details').each(function(){
            var $profile1 = $(this);
            var name = $profile1.find('.user-name').text();
            name = name.replace(/^\s+/,'').replace(/\s+$/,'');
            console.log(name + ":" + $.inArray(name, members));
            if ($.inArray(name, names) > -1) {
                var $profile2 = $('<div></div>').css({
                    "margin": "40px"
                });
                //名前
                $('<div></div>').css({
                    "fontSize": "40px"
                }).appendTo($profile2).text($profile1.children('.user-name').text());
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
            }
        });

    });
}

if (url.match(/doorkeeper\.jp\/events\//)) {
    //フッターの下に人物リストを作る
    var $introduction = $('<div></div>').css({
        "lineHeight": "normal"
    }).appendTo('body');

    //反映ボタン
    var $button = $('<input type="button" value="自己紹介構築">').appendTo('body');
    $button.click(function(){
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
}
