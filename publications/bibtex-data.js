
// BibTeX 数据库 - 在这里管理所有论文的引用数据
const bibDatabase = {
    'Sun2024-TSC': `@article{Sun2024-TSC,
abstract = {Multi-cloud is a promising paradigm due to its advantages such as avoiding vendor lock-in and optimising costs. This paper focuses on dynamic flexible workflow scheduling with minimum total monetary cost in multi-clouds, considering multiple categories of services for each cloud with different configurations and billing methods. Existing studies generally ignore the characteristics and states of each individual cloud when making schedules, which may be ineffective regarding cost savings and quality of service. To address this issue, we propose to introduce a cloud selection decision on top of the existing task selection and resource selection decisions to help us select appropriate resource for task in an overall cost-effective cloud. To automatically learn the task, cloud and resource selection rules simultaneously, we propose a new genetic programming with multi-tree representation based on a customised discrete event-driven dynamic workflow scheduling simulator. Simulation results based on two real-world data traces show that the proposed algorithm performs significantly better than the state-of-the-art algorithms in terms of reducing the rental costs and deadline deviation, and improving the success rate. The results also show that the superiority of the proposed algorithm lies in the ability to select an appropriate cloud resource for a task.},
author = {Sun, Zaixing and Mei, Yi and Zhang, Fangfang and Huang, Hejiao and Gu, Chonglin and Zhang, Mengjie},
doi = {10.1109/TSC.2024.3394691},
issn = {1939-1374},
journal = {IEEE Transactions on Services Computing},
keywords = {Cloud computing,Costs,Dynamic scheduling,Dynamic workflow scheduling,Genetic programming,Heuristic algorithms,Processor scheduling,Task analysis,deadline constraint,genetic programming,hyper-heuristic,multi-clouds},
month = {sep},
number = {5},
pages = {2687--2703},
title = {{Multi-Tree Genetic Programming Hyper-Heuristic for Dynamic Flexible Workflow Scheduling in Multi-Clouds}},
url = {https://ieeexplore.ieee.org/document/10509784/},
volume = {17},
year = {2024}
}`,

    'Sun2023-ESWA': `@article{Sun2023-ESWA,
abstract = {Benefiting from the flexible, scalable and secure environment, hybrid cloud can overcome the shortage of limited resources in private cloud to simultaneously execute large-scale scientific workflows. In hybrid cloud, privacy-sensitive tasks are not allowed to be executed on public resources, while non-sensitive tasks are unrestricted. As an NP-Complete problem, it is extraordinarily challenging to schedule multiple workflows efficiently, economically and energy-savingly under quality-of-service constraints. This paper models the hybrid-cloud-based privacy-aware multi-workflow scheduling as a tri-objective optimization problem that optimizes workflow-oriented total tardiness, private-cloud-oriented total energy consumption, and public-cloud-oriented total monetary cost. To the best of authors' knowledge, few studies have been conducted on the tri-objective privacy-aware multi-workflow scheduling in hybrid cloud (PMWS-HC). To solve this problem, we dissect various factors involved during task scheduling and devise a novel Heuristic Scheduling Algorithm based on 9 Factors (HSA9Fs), which dynamically selects the workflows and tasks to be scheduled, and the corresponding VMs to execute them. To optimize the three conflicting objectives simultaneously, we propose a nested algorithm called MSIA, which first employs a Multi-objective Salp swarm algorithm to explore for the Pareto solutions, and then uses an Iterative greedy Algorithm to perform a refined search on individuals to obtain high-quality solutions. Extensive Medium-Small-Scale and Large-Scale simulation experiments show that both HSA9Fs and MSIA outperform state-of-the-art scheduling algorithms in several multi-objective performance metrics.},
author = {Sun, Zaixing and Huang, Hejiao and Li, Zhikai and Gu, Chonglin and Xie, Ruitao and Qian, Bin},
doi = {10.1016/j.eswa.2023.120401},
issn = {09574174},
journal = {Expert Systems with Applications},
keywords = {Directed acyclic graph,Heuristic algorithm,Hybrid cloud,Multi-objective optimization,Multi-workflow scheduling,Pareto front},
mendeley-groups = {bib,multiple clouds},
month = {oct},
pages = {120401},
title = {{Efficient, economical and energy-saving multi-workflow scheduling in hybrid cloud}},
url = {https://linkinghub.elsevier.com/retrieve/pii/S095741742300903X},
volume = {228},
year = {2023}
}`,

    'Sun2022-TSC': `@article{Sun2022-TSC,
abstract = {Cloud computing is an emerging computational infrastructure for cost-efficient workflow execution that provides flexible and dynamically scalable computing resources at pay-as-you-go pricing. Workflow scheduling, as a typical NP-Complete problem, is one of the major issues in cloud computing. However, in the cloud scenario with unlimited resources, how to generate an efficient and economical workflow scheduling scheme under the deadline constraint is still an extraordinary challenge. In this article, we propose a hybrid heuristic algorithm called enhanced task type first algorithm (ET2FA) to solve deadline-constrained workflow scheduling in cloud with new features such as hibernation and per-second billing. The objectives to be minimized include the total cost and total idle rate. ET2FA involves three phases: 1) Task type first algorithm, which schedules tasks based on topological level and task types, and utilizes a compact-scheduling-condition based VM selection method to assign each task. 2) Delay operation based on block structure, which further optimizes total cost and total idle rate based on block structure properties. 3) Instance hibernate scheduling heuristic, which sets an instance to hibernate if idle for a duration. Extensive simulation experiments based on seven well-known real-world workflow applications show that ET2FA delivers better performance in comparison to the state-of-the-art algorithms.},
author = {Sun, Zaixing and Zhang, Boyu and Gu, Chonglin and Xie, Ruitao and Qian, Bin and Huang, Hejiao},
doi = {10.1109/TSC.2022.3196620},
issn = {19391374},
journal = {IEEE Transactions on Services Computing},
keywords = {Workflow scheduling,cloud computing,deadline constraint,directed acyclic graph,hibernate instance},
number = {3},
pages = {1807--1821},
title = {{ET2FA: A Hybrid Heuristic Algorithm for Deadline-Constrained Workflow Scheduling in Cloud}},
url = {https://ieeexplore.ieee.org/document/9851558/},
volume = {16},
year = {2023}
}`,

}