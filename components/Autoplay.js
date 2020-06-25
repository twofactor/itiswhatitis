const video = {
  __html: `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/223862154&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/the-scientist-160635278" title="The Scientist DJ" target="_blank" style="color: #cccccc; text-decoration: none;">The Scientist DJ</a> · <a href="https://soundcloud.com/the-scientist-160635278/era-ameno-the-scientist-remix" title="Era - Ameno (The Scientist Remix)" target="_blank" style="color: #cccccc; text-decoration: none;">Era - Ameno (The Scientist Remix)</a></div>`,
};

export default function Autoplay() {
  return <div dangerouslySetInnerHTML={video} />;
}
