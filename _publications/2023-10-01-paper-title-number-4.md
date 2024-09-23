---
title: "4. Leveraging Multiple Teachers for Test-Time Adaptation of Language-Guided Classifiers"
collection: publications
permalink: /publication/2023-10-01-paper-title-number-4
excerpt:
date: 2023-10-06
venue: 'Findings of the Empirical Methods in Natural Language Processing 2023'
paperurl: 
citation:
---
Recent approaches have explored language-guided classifiers capable of classifying examples from novel tasks when provided with task-specific natural language explanations, instructions or prompts (Sanh et al., 2022; R. Menon et al., 2022; Brown et al., 2020). While these classifiers can generalize in zero-shot settings, the task performance often varies substantially between the language explanations in unpredictable ways (Lu et al., 2022; Gonen et al., 2022). Also, current approaches don’t leverage unlabeled examples of a task that may be available in many scenarios. Here, we introduce TALC, a framework that leverages data programming to adapt a language-guided classifier for a novel task during inference when given access to explanations from multiple teachers and unlabeled test examples. Our results show that TALC consistently outperforms a competitive baseline from prior work by an impressive 9.3% (relative improvement). Furthermore, we showcase the robustness of TALC to variations in the quality and quantity of provided explanations, indicating its potential in scenarios involving learning from multiple teachers or a crowd.

[Download paper here](https://aclanthology.org/2023.findings-emnlp.471)