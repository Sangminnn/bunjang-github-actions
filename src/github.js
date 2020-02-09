import { Toolkit } from "actions-toolkit";

export default function createIssue(title, body) {
  Toolkit.run(
    async tools => {
      tools.log.info(`Creating new issue ${title}`);

      try {
        const issue = await tools.github.issues.create({
          ...tools.context.repo,
          title,
          body,
        });

        tools.log.success(
          `Created issue ${issue.data.title}#${issue.data.number}: ${issue.data.html_url}`,
        );
      } catch (err) {
        tools.log.error(err);
        if (err.errors) {
		    tools.log.error(err.errors);
		  }

        tools.exit.failure();
      }
    },
    {
      secrets: ["GITHUB_TOKEN"],
    },
  );
}
