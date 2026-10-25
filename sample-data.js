/**
 * OmniCheck-AI Test Presets
 * Pre-calibrated samples for instant evaluation
 */

const OmniCheckSamples = {
  aiEssay: {
    title: "AI-Generated Essay: The Digital Era",
    author: "Dr. Evelyn Vance",
    filename: "AI_Generated_Essay.docx",
    type: "docx",
    text: `In today's fast-paced world, artificial intelligence stands as a testament to human innovation and technological prowess. Furthermore, it is crucial to note that the emergence of large language models has fundamentally transformed our relationship with information processing. In the ever-evolving landscape of digital automation, organizations are poised to reshape traditional industrial workflows with unprecedented velocity. 

To delve into the intricacies of this transformative paradigm, one must examine the multifaceted dimensions of algorithmic decision-making. Moreover, artificial neural systems foster a deeper understanding of synthetic cognition while unlocking a myriad of creative possibilities. By harnessing the power of predictive inference, researchers can navigate the complexities of complex biological systems.

It is important to remember that ethical considerations play a pivotal role in shaping responsible deployment strategies. Additionally, the integration of algorithmic oversight serves as a reminder of our collective responsibility toward equitable progress. In conclusion, the ongoing renaissance in machine learning underscores the necessity of continuous vigilance and rigorous oversight as we journey toward artificial general intelligence.`
  },

  plagiarizedPaper: {
    title: "Academic Paper with Copied Excerpts",
    author: "Marcus Sterling (PhD Candidate)",
    filename: "Neural_Circuits_Draft.pdf",
    type: "pdf",
    text: `The investigation of cognitive architectures demands an understanding of biological and artificial networks. Synaptic plasticity within cortical circuits governs the primary mechanisms of long-term information processing and memory consolidation. Recent findings demonstrate that dendritic computations actively modulate firing rates during associative learning phases.

Furthermore, deep residual learning addresses the degradation problem through identity shortcut connections, allowing networks with hundreds of layers to converge stably. When evaluating neural scaling laws, researchers observed consistent power-law improvements across both visual and textual benchmarks.

Epistemic justification concerns whether belief states satisfy the normative requirements necessary to qualify as genuine cognitive knowledge. In this work, we propose a hybrid framework that bridges biological synaptic rules with residual computational pathways to stabilize distributed associative memories.`
  },

  humanArticle: {
    title: "Human Opinion Piece (Natural Voice)",
    author: "Devon Rivera",
    filename: "My_Tech_Reflections.txt",
    type: "txt",
    text: `I spent last Sunday debugging a nasty memory leak in my side project, and honestly, it drove me crazy. Modern web frameworks promise effortless developer velocity, but when things break under the hood, good luck digging through twelve layers of abstraction. 

Computers don't care about our clean architecture diagrams. They just execute instructions, one by one. 

We used to write plain scripts that anyone could read in twenty minutes. Now? You need half a dozen config files, five transpilers, and a prayer to bundle a simple landing page. Don't get me wrong—I love what modern software can do. But let's be real: sometimes simpler really is better.`
  },

  mixedText: {
    title: "Mixed Hybrid Draft (Human + AI + Plagiarism)",
    author: "Sarah Lin & Team",
    filename: "Hybrid_Research_Summary.docx",
    type: "docx",
    text: `We started our project hoping to streamline local data ingestion, but the existing tooling fell flat on its face. I had to rewrite the entire pipeline in Go over the weekend just to keep the ingestion queue alive.

In today's fast-paced world, artificial intelligence stands as a testament to human innovation and technological prowess. To delve into the intricacies of this transformative paradigm, one must examine the multifaceted dimensions of algorithmic decision-making.

Artificial General Intelligence requires capabilities that span multiple domains, demonstrating emergent abilities on novel benchmarks without explicit fine-tuning.

Overall, our team believes that combining simple, handwritten microservices with pragmatic machine learning models will give us the best outcome without bloating the maintenance burden.`
  },

  oversizedText: {
    title: "Oversized Document (>10,000 words limit trigger)",
    filename: "Exceeds_10000_Words_Corpus.txt",
    type: "txt",
    // Generates >10,000 words instantly using native repeat
    getText: function() {
      const baseParagraph = "The rapid evolution of computational intelligence continues to drive fundamental revisions across modern information processing architectures and automated data governance frameworks worldwide. ";
      return "LIMIT TEST SUITE (10,001 WORDS ENFORCEMENT):\n\n" + baseParagraph.repeat(520);
    }
  }
};
