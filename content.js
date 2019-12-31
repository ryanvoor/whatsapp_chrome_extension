var checkChatsElementExists = setInterval(
    function() {
        if ( typeof document.getElementById( 'main' ) !== 'undefined' ) {
            if ( document.getElementsByTagName( 'body' )[0].clientHeight > 1200 ) {
                document.getElementById( 'main' ).style.marginBottom = '500px';
                console.log( 'Putting extra space under the chat content so it strains my neck less' );
                clearInterval( checkChatsElementExists );
            }
        }
    },
    100 // check every 100 ms to see if the chats wrapper div exists on the page yet
);
