# SuperBenefit Lexicon: Contribution Guide

This directory contains our shared vocabulary and conceptual framework. This guide explains how to add new terms and definitions to the SuperBenefit Lexicon.

## Using Obsidian for Lexicon Management

We use Obsidian to manage our knowledge base, including the SuperBenefit Lexicon. Here's how you can leverage Obsidian's features to contribute effectively:

*   **Create New Tag Files:** Each term in the lexicon has its own Markdown file (e.g., `dao.md`, `web3.md`). Create new files for terms you want to define.
*   **Use the Tag Template:** Use the [Tag Template](tools/templates/Tag%20Template.md) to ensure consistency in formatting and metadata.
*   **Add Metadata:** Fill in the required metadata fields, including the title, description, and aliases.
*   **Define the Term:** Provide a clear and concise definition of the term.
*   **Add Context and Usage Examples:** Explain how the term is used within the SuperBenefit network and the broader Web3 ecosystem.
*   **Link to Related Resources:** Link to relevant notes, articles, and external resources.
*   **Use Aliases:** Add aliases to the metadata to create alternative names for the term. This allows users to find the term using different keywords.

## Displaying Lexicon Entries as Tag Pages in Quartz

We use Quartz to publish our knowledge garden, including the SuperBenefit Lexicon. Quartz automatically generates tag pages for each tag in our knowledge base.

To ensure that your lexicon entries are displayed correctly as tag pages in Quartz:

1.  **Ensure the `publish: true` Property:** Make sure that the `publish` property in the frontmatter of your tag file is set to `true`.
2.  **Use a Clear and Concise Description:** The description in the frontmatter will be used as the summary for the tag page in Quartz.
3.  **Link to the Tag Page:** Use the tag itself (e.g., `#dao`) to link to the tag page from other notes and resources.

## Key Resources

*   **Tag Template:** [tools/templates/Tag%20Template.md](tools/templates/Tag%20Template.md) - Use this template to create new tag files.
*   **Contribution Guidelines:** [CONTRIBUTING.md](/CONTRIBUTING.md) - Review our overall contribution process.

## Questions?

If you have any questions about contributing to the SuperBenefit Lexicon, please don't hesitate to ask in our community channels.
