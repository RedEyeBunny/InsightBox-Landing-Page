export function ShortFormContentLearningArticle() {
  return (
    <div className="space-y-5 text-base leading-relaxed text-text-dark">
      <p>
        Today, many people use social media. Apps like Instagram, Facebook, and YouTube are some of
        the most widely used apps around the world. All of these apps have some form of short form
        content on them.
      </p>
      <p>
        Instagram has Reels, YouTube has Shorts, Snapchat has Spotlight, and many other platforms
        have followed the same format.
      </p>
      <p>Short form content has also changed the way we discover information.</p>
      <p>
        You can learn a new exercise, discover a business idea, find a book recommendation, learn a
        programming trick, discover a new recipe, or hear an interesting fact in less than a minute.
      </p>
      <p>In some ways, this is incredible.</p>
      <p>
        We have access to more information than ever before, and much of it is packaged in a way
        that makes it easy to consume.
      </p>
      <p>
        <strong>But consuming information isn&apos;t the same as learning it.</strong>
      </p>
      <p>
        You might watch a 30 second video about something interesting and understand it while
        you&apos;re watching.
      </p>
      <p>You might even think:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;That&apos;s useful. I should remember this.&rdquo;
      </blockquote>
      <p>So you save the video.</p>
      <p>And then you continue scrolling.</p>
      <p>A few days later, you might see another interesting video and save that too.</p>
      <p>Then another one.</p>
      <p>And another.</p>
      <p>
        Eventually, your saved folder becomes a collection of hundreds of things that you once
        thought were worth remembering.
      </p>
      <p>But how many of them do you actually remember?</p>
      <p>
        And more importantly, <strong>how many can you actually find when you need them?</strong>
      </p>

      <h2 className="pt-8 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
        The &ldquo;I&apos;ll come back to this later&rdquo; problem
      </h2>
      <p>
        I think this is one of the strange problems created by the abundance of information on
        social media.
      </p>
      <p>Saving something feels like we&apos;ve done something useful with it.</p>
      <p>We haven&apos;t.</p>
      <p>
        <strong>We&apos;ve only made sure that the content isn&apos;t immediately lost.</strong>
      </p>
      <p>There is a big difference between:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;I saved this.&rdquo;
      </blockquote>
      <p>and</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;I learned this.&rdquo;
      </blockquote>
      <p>There is an even bigger difference between:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;I saved this.&rdquo;
      </blockquote>
      <p>and</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;I can find and use this when I need it.&rdquo;
      </blockquote>
      <p>The first one takes a second.</p>
      <p>The second one requires some kind of system.</p>

      <h2 className="pt-8 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
        Your saved folder isn&apos;t a knowledge base
      </h2>
      <p>This is where I started thinking differently about the problem.</p>
      <p>
        Instagram&apos;s job is to help you discover and consume content. Its save feature is mainly
        a bookmarking mechanism.
      </p>
      <p>It answers:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;Do you want to keep this?&rdquo;
      </blockquote>
      <p>But it doesn&apos;t really answer:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;Why do you want to keep this?&rdquo;
      </blockquote>
      <p>Maybe you saved a video because it taught you something.</p>
      <p>Maybe you saved it because you want to try something later.</p>
      <p>Maybe you saved it because you want to watch a movie.</p>
      <p>Maybe you saved it because you want to buy something.</p>
      <p>Maybe you simply liked it and want to find it again.</p>
      <p>
        The content can be exactly the same, but the reason for saving it can be completely
        different.
      </p>
      <p>And that reason matters.</p>
      <p>
        If I save a video about a business idea because I want to research it later, the useful
        information isn&apos;t just the transcript of the video.
      </p>
      <p>
        <strong>The useful information is also why I saved it in the first place.</strong>
      </p>

      <h2 className="pt-8 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
        From consuming information to retaining it
      </h2>
      <p>
        This made me think that there are actually several steps between discovering information and
        being able to use it later.
      </p>
      <ol className="my-8 grid gap-3 rounded-2xl border border-soft-gray bg-white p-5 sm:grid-cols-2">
        {[
          "Discover",
          "Understand",
          "Save",
          "Organize",
          "Remember",
          "Retrieve",
          "Use",
        ].map((step, index) => (
          <li key={step} className="flex items-center gap-3 text-sm font-semibold text-text-dark">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet/10 text-xs font-bold text-violet">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
      <p>Social media is extremely good at the first two.</p>
      <p>
        It gives us an endless stream of things to discover and makes them incredibly easy to
        consume.
      </p>
      <p>But the rest is mostly left to us.</p>
      <p>And that&apos;s where things start breaking down.</p>
      <p>We save something because we don&apos;t want to lose it.</p>
      <p>Then we forget why we saved it.</p>
      <p>Then we can&apos;t find it.</p>
      <p>Then, eventually, we forget the information itself.</p>
      <p>
        The irony is that we can have access to almost unlimited information and still struggle to
        remember the few things we actually wanted to keep.
      </p>

      <h2 className="pt-8 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
        So what should a better system do?
      </h2>
      <p>I don&apos;t think the answer is simply to summarize everything.</p>
      <p>A summary is useful, but it doesn&apos;t solve the entire problem.</p>
      <p>The more interesting question is:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;What is actually worth remembering from this piece of content?&rdquo;
      </blockquote>
      <p>And perhaps even more importantly:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        &ldquo;Why does this particular piece of content matter to me?&rdquo;
      </blockquote>
      <p>AI can help with the tedious part.</p>
      <p>
        It can extract names, facts, ideas, steps, resources, and other useful information from
        content.
      </p>
      <p>But deciding what matters is ultimately a human problem.</p>
      <p>A good system should therefore help with both sides:</p>
      <p>AI extracts and organizes the information.</p>
      <p>The person provides the context and decides what is worth keeping.</p>
      <p>
        That starts to look less like a bookmarking tool and more like a personal knowledge system.
      </p>

      <h2 className="pt-8 text-2xl font-bold tracking-tight text-text-dark sm:text-3xl">
        This is the problem I&apos;m trying to solve with InsightBox
      </h2>
      <p>
        This is what led me to build{" "}
        <a
          href="https://useinsightbox.com/"
          className="font-semibold text-violet hover:text-violet-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet"
        >
          InsightBox
        </a>
        .
      </p>
      <p>
        The idea isn&apos;t to create another place where you can collect hundreds of pieces of
        content.
      </p>
      <p>There are already plenty of places to do that.</p>
      <p>
        The idea is to make the things you already decide are worth saving more useful.
      </p>
      <p>Instead of:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        See something, Save it, Forget about it
      </blockquote>
      <p>the goal is:</p>
      <blockquote className="border-l-4 border-violet pl-4 font-medium italic text-text-dark">
        See something, Save it, Extract what matters, Add context, Organize it, Come back to it when
        you need it
      </blockquote>
      <p>I&apos;m still figuring out what the best version of this looks like.</p>
      <p>
        And one thing I&apos;ve already learned is that not everything people save is knowledge.
      </p>
      <p>Some things are saved because they&apos;re useful.</p>
      <p>Some because they&apos;re interesting.</p>
      <p>Some because they inspire us.</p>
      <p>Some because we want to do something with them later.</p>
      <p>And some because they simply make us feel something.</p>
      <p>
        Maybe a good personal memory system shouldn&apos;t try to turn everything into knowledge.
      </p>
      <p>
        <strong>
          Maybe it should help us remember why we cared about something in the first place.
        </strong>
      </p>
    </div>
  )
}
