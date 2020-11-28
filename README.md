<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="wBot_0"></a>wBot</h1>
<p class="has-line-data" data-line-start="2" data-line-end="3"><a href="https://github.com/Akira13345"><img src="https://avatars0.githubusercontent.com/u/60575816?s=460&amp;u=4ceae5dfdfb633ce0116daf78007d7aa71157a8d&amp;v=4" alt="N|Solid"></a></p>
<p class="has-line-data" data-line-start="4" data-line-end="5">A simple bot which consists of giving you a default rank and displaying a welcome message</p>
<ul>
<li class="has-line-data" data-line-start="6" data-line-end="7">Configuration</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">Easy and convenient</li>
<li class="has-line-data" data-line-start="8" data-line-end="10">Free</li>
</ul>
<h1 class="code-line" data-line-start=10 data-line-end=11 ><a id="Future_features__10"></a>Future features !</h1>
<ul>
<li class="has-line-data" data-line-start="12" data-line-end="13">Moderation system</li>
<li class="has-line-data" data-line-start="13" data-line-end="14">Useful command</li>
</ul>
<blockquote>
<p class="has-line-data" data-line-start="17" data-line-end="20">How to configure the bot ?<br>
before configuring it, we will create the bot, for that go to the site<br>
<a href="https://discord.com/developers/applications">https://discord.com/developers/applications</a></p>
</blockquote>
<blockquote>
<p class="has-line-data" data-line-start="21" data-line-end="26">once register click on the button on the right “New application”<br>
enter the name of your bot<br>
then click “bot” on the left<br>
then click on “Add Bot”<br>
→ Yes, do it !</p>
</blockquote>
<blockquote>
<p class="has-line-data" data-line-start="27" data-line-end="29">now click on “copy” this will copy your bot token<br>
and insert it between the quotes in the settings.json</p>
</blockquote>
<blockquote>
<p class="has-line-data" data-line-start="30" data-line-end="34">now we will invite the robot to the server<br>
in General information in the Parameters category, you will copy the client id<br>
<a href="https://discord.com/oauth2/authorize?client_id=ID&amp;scope=bot&amp;permissions=305196094">https://discord.com/oauth2/authorize?client_id=ID&amp;scope=bot&amp;permissions=305196094</a><br>
you will put it in place of “ID” on the link above</p>
</blockquote>
<h3 class="code-line" data-line-start=36 data-line-end=37 ><a id="Installation_36"></a>Installation</h3>
<p class="has-line-data" data-line-start="38" data-line-end="43">to launch the bot on your computer, you need to install nodejs<br>
<a href="https://nodejs.org/en/">https://nodejs.org/en/</a><br>
once installed, you have 2 methods to start the bot<br>
before doing this we need to install discord.js<br>
go to command prompt (cmd) , and type</p>
<pre><code class="has-line-data" data-line-start="45" data-line-end="48" class="language-sh"><span class="hljs-built_in">cd</span> your destination
npm install discord.js
</code></pre>
<p class="has-line-data" data-line-start="48" data-line-end="51">launch the .bat which is in the wBot folder<br>
or<br>
go to command prompt (cmd) , and type</p>
<pre><code class="has-line-data" data-line-start="53" data-line-end="56" class="language-sh"><span class="hljs-built_in">cd</span> your destination
node index.js
</code></pre>
<h1 class="code-line" data-line-start=58 data-line-end=59 ><a id="to_launch_the_bot_on_your_vps_you_must_follow_the_steps_below_58"></a>to launch the bot on your vps, you must follow the steps below</h1>
<h1 class="code-line" data-line-start=59 data-line-end=60 ><a id="Debian_910_59"></a>(Debian 9/10)</h1>
<pre><code class="has-line-data" data-line-start="63" data-line-end="65" class="language-sh">apt-get update &amp;&amp; apt-get upgrade -y
</code></pre>
<pre><code class="has-line-data" data-line-start="66" data-line-end="68" class="language-sh">» apt-get install screen
</code></pre>
<p class="has-line-data" data-line-start="68" data-line-end="69">then go to the home folder of your machine, create a folder named bot and drag the bot content there</p>
<pre><code class="has-line-data" data-line-start="70" data-line-end="72" class="language-sh">apt-get install curl -y
</code></pre>
<pre><code class="has-line-data" data-line-start="73" data-line-end="75" class="language-sh">» curl <span class="hljs-operator">-s</span>L https://deb.nodesource.com/setup_12.x | bash -
</code></pre>
<pre><code class="has-line-data" data-line-start="76" data-line-end="78" class="language-sh">» apt-get install build-essential nodejs -y
</code></pre>
<pre><code class="has-line-data" data-line-start="79" data-line-end="81" class="language-sh"><span class="hljs-built_in">cd</span> /home/bot
</code></pre>
<pre><code class="has-line-data" data-line-start="82" data-line-end="84" class="language-sh"> index.js
</code></pre>
<h1 class="code-line" data-line-start=85 data-line-end=86 ><a id="Configuration_85"></a>Configuration</h1>
<pre><code>&quot;wBot&quot;: &quot;0.1&quot;, 

&quot;token&quot;: &quot;insert your token here&quot;,
&quot;BotStatus&quot;: &quot;set a status for your bot&quot;,

&quot;welcome_channel&quot;: &quot;name of the welcome lounge&quot;,

&quot;colour&quot;: &quot;embed color&quot;,
&quot;title&quot;: &quot;set the title of your bot&quot;,
&quot;description&quot;: &quot;set the description of your bot&quot;,
&quot;footer&quot;: &quot;set the footer of your bot&quot;,

&quot;auto_role&quot;: &quot;default grade name&quot;</code></pre>
